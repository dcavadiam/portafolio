"use client";

import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { CONTACT } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Calendar, Loader2, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";

const initialState: ContactFormState = { status: "idle" };

const inputClassName = cn(
  "w-full rounded-lg border border-border bg-background/90 px-3 py-2.5 text-sm text-foreground shadow-sm transition-[color,box-shadow]",
  "placeholder:text-muted-foreground/80",
  "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-60",
  "aria-[invalid=true]:border-destructive/80 aria-[invalid=true]:ring-destructive/25",
);

const labelClassName =
  "text-xs font-medium uppercase tracking-wide text-muted-foreground";

const iconWrapClass =
  "flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent";

const socialLinks = [
  {
    href: CONTACT.github,
    label: "GitHub",
    icon: GitHubLogoIcon,
  },
  {
    href: CONTACT.linkedin,
    label: "LinkedIn",
    icon: LinkedInLogoIcon,
  },
  {
    href: `mailto:${CONTACT.email}`,
    label: "Email",
    icon: Mail,
  },
] as const;

export default function Form() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const mailtoOpened = useRef(false);

  useEffect(() => {
    if (state.status !== "use_mailto" || mailtoOpened.current) return;
    mailtoOpened.current = true;
    window.location.assign(state.mailtoHref);
  }, [state]);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
    if (state.status !== "use_mailto") {
      mailtoOpened.current = false;
    }
  }, [state.status]);

  const fieldErrors = state.status === "invalid" ? state.fieldErrors : {};

  return (
    <section
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col gap-10 rounded-2xl border border-border/80 bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:flex-row lg:items-start lg:gap-12 lg:p-10">
        <div className="flex w-full flex-col gap-8 lg:max-w-md lg:shrink-0">
          <div className="space-y-4">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas u
              oportunidades para ser parte de tus visiones.
            </p>
          </div>

          <ul className="flex flex-col gap-6">
            <li className="flex gap-4">
              <div className={iconWrapClass} aria-hidden>
                <Mail className="size-5" strokeWidth={2} />
              </div>
              <div className="min-w-0 space-y-0.5">
                <p className={labelClassName}>Email</p>
                <Link
                  href={`mailto:${CONTACT.email}`}
                  className="font-semibold text-foreground underline-offset-4 hover:text-accent hover:underline"
                >
                  {CONTACT.email}
                </Link>
              </div>
            </li>
            <li className="flex gap-4">
              <div className={iconWrapClass} aria-hidden>
                <MapPin className="size-5" strokeWidth={2} />
              </div>
              <div className="min-w-0 space-y-0.5">
                <p className={labelClassName}>Ubicación</p>
                <p className="font-semibold text-foreground">{CONTACT.location}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className={iconWrapClass} aria-hidden>
                <Calendar className="size-5" strokeWidth={2} />
              </div>
              <div className="min-w-0 space-y-0.5">
                <p className={labelClassName}>Disponibilidad</p>
                <p className="font-semibold text-foreground">{CONTACT.availability}</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className={cn(
                  "flex size-11 items-center justify-center rounded-full border border-border/90 bg-secondary/60 text-foreground transition-colors",
                  "hover:border-accent/50 hover:bg-accent/15 hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                )}
                aria-label={label}
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full min-w-0 flex-1">
          <div className="rounded-2xl border border-border/60 bg-muted/40 p-5 sm:p-6 dark:bg-muted/25">
            <h3 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Envíame un mensaje
            </h3>

            {state.status === "success" && (
              <p
                className="mb-4 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2.5 text-sm text-foreground"
                role="status"
              >
                Mensaje enviado. Gracias — te responderé lo antes posible.
              </p>
            )}

            {state.status === "error" && (
              <p
                className="mb-4 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2.5 text-sm text-destructive"
                role="alert"
              >
                {state.message}
              </p>
            )}

            {state.status === "use_mailto" && (
              <p className="mb-4 text-sm text-muted-foreground" role="status">
                Abriendo tu aplicación de correo… Si no ocurre nada, escribe a{" "}
                <Link href={`mailto:${CONTACT.email}`} className="font-medium text-accent underline">
                  {CONTACT.email}
                </Link>
                .
              </p>
            )}

            <form ref={formRef} action={formAction} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className={labelClassName}>
                    Nombre <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    disabled={isPending}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                    placeholder="Tu nombre"
                    className={inputClassName}
                  />
                  {fieldErrors.name && (
                    <p id="contact-name-error" className="text-xs text-destructive">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className={labelClassName}>
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    disabled={isPending}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                    placeholder="tu@email.com"
                    className={inputClassName}
                  />
                  {fieldErrors.email && (
                    <p id="contact-email-error" className="text-xs text-destructive">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className={labelClassName}>
                  Asunto <span className="text-destructive">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  disabled={isPending}
                  aria-invalid={Boolean(fieldErrors.subject)}
                  aria-describedby={fieldErrors.subject ? "contact-subject-error" : undefined}
                  placeholder="En qué puedo ayudarte"
                  className={inputClassName}
                />
                {fieldErrors.subject && (
                  <p id="contact-subject-error" className="text-xs text-destructive">
                    {fieldErrors.subject}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className={labelClassName}>
                  Mensaje <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  disabled={isPending}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                  placeholder="Cuéntame sobre el proyecto, plazos y stack si lo tienes claro."
                  className={cn(inputClassName, "min-h-[140px] resize-y")}
                />
                {fieldErrors.message && (
                  <p id="contact-message-error" className="text-xs text-destructive">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className={cn(
                  "mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full font-semibold transition-all",
                  "bg-primary text-primary-foreground shadow-sm",
                  "hover:bg-primary/90 hover:shadow-md active:scale-[0.99]",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  "disabled:pointer-events-none disabled:opacity-60",
                )}
              >
                {isPending ? (
                  <>
                    <Loader2 className="size-5 animate-spin" aria-hidden />
                    Enviando…
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
