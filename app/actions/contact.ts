"use server";

import { Resend } from "resend";

import { CONTACT } from "@/lib/contact";

/**
 * Variables de entorno (servidor):
 * - RESEND_API_KEY — obligatoria para envío por API; si falta, se usa mailto como respaldo.
 * - RESEND_FROM — remitente (ej. "Portfolio <contacto@tudominio.com>"); dominio verificado en Resend.
 *   Sin definir: "Portfolio <onboarding@resend.dev>" (solo para pruebas; restricciones en Resend).
 * - RESEND_TO — destino del formulario; por defecto CONTACT.email.
 */

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "invalid";
      fieldErrors: Partial<Record<"name" | "email" | "subject" | "message", string>>;
    }
  | { status: "error"; message: string }
  | { status: "use_mailto"; mailtoHref: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const bodyHtml = escapeHtml(message).replace(/\r\n/g, "\n").split("\n").join("<br />");

  return `
    <p><strong>Nombre:</strong> ${safeName}</p>
    <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(email)}">${safeEmail}</a></p>
    <p><strong>Mensaje:</strong></p>
    <p>${bodyHtml}</p>
  `.trim();
}

function buildEmailText(name: string, email: string, message: string): string {
  return [`Nombre: ${name}`, `Email: ${email}`, "", "Mensaje:", message].join("\n");
}

function validate(
  name: string,
  email: string,
  subject: string,
  message: string,
): ContactFormState | null {
  const fieldErrors: Partial<Record<"name" | "email" | "subject" | "message", string>> =
    {};

  if (name.length < 2) {
    fieldErrors.name = "Indica al menos 2 caracteres.";
  }
  if (!emailPattern.test(email)) {
    fieldErrors.email = "Introduce un email válido.";
  }
  if (subject.length < 3) {
    fieldErrors.subject = "El asunto es demasiado corto.";
  }
  if (message.length < 10) {
    fieldErrors.message = "Cuéntame un poco más (mín. 10 caracteres).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "invalid", fieldErrors };
  }
  return null;
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const invalid = validate(name, email, subject, message);
  if (invalid) return invalid;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    const body = [`De: ${name} <${email}>`, "", message].join("\n");
    const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { status: "use_mailto", mailtoHref };
  }

  const from =
    process.env.RESEND_FROM?.trim() ||
    "Portfolio <onboarding@resend.dev>";
  const to = process.env.RESEND_TO?.trim() || CONTACT.email;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: buildEmailHtml(name, email, message),
      text: buildEmailText(name, email, message),
    });

    if (error) {
      return {
        status: "error",
        message:
          typeof error.message === "string"
            ? error.message
            : "No se pudo enviar el mensaje. Prueba de nuevo o escríbeme por email.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Error al enviar. Comprueba tu conexión o usa el email directamente.",
    };
  }
}
