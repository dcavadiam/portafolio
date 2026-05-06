import FreelanceValueCard from "@/components/layout/FreelanceValueCard";
import { Button } from "@/components/ui/button";
import { freelanceSectionCardClassName } from "@/lib/freelance-section-card";
import { cn } from "@/lib/utils";
import { ArrowRight, Kanban, Scale } from "lucide-react";
import Link from "next/link";

const services = [
  "Desarrollo web",
  "Aplicaciones React / Next.js",
  "Landing pages",
  "APIs e integraciones",
  "Code review",
];

const workPrinciples = [
  {
    icon: Kanban,
    title: "Progreso visible, sin caja negra",
    description:
      "Entregas por hitos, resumen de cambios y código ordenado. Ves avance real en cada paso, das feedback a tiempo y reduces riesgo antes del cierre.",
  },
  {
    icon: Scale,
    title: "Alcance y plazos que puedes confiar",
    description:
      "Si el encaje o el calendario no cierran, te lo digo temprano. Prefiero ajustar expectativas o recomendarte a alguien antes que asumir un compromiso poco serio.",
  },
] as const;

const trustSignals = [
  {
    value: `${new Date().getFullYear() - 2022}+ años`,
    label: "Años en desarrollo",
  },
  {
    value: "Remoto",
    label: "Modalidad preferida",
  },
  {
    value: "TS / React",
    label: "Stack principal",
  },
  {
    value: "<48h",
    label: "Respuesta habitual",
  },
];

export default function Freelance() {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col justify-center gap-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-start">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-4xl font-bold">Freelance & consultoría</h2>
          <p className="text-muted-foreground">
            Ofrezco desarrollo y acompañamiento técnico para equipos y proyectos
            que buscan calidad y comunicación clara. Priorizo expectativas
            realistas y entregas bien explicadas, también cuando el historial
            freelance aún está en construcción.
          </p>
        </div>
        <Link href="/contact" className="shrink-0 sm:mt-1">
          <Button variant="outline" size="sm" className="cursor-pointer">
            Hablemos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {trustSignals.map((item) => (
          <div
            key={item.label}
            className={cn(freelanceSectionCardClassName, "p-4 md:p-5")}
          >
            <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            <p className="text-2xl font-semibold text-accent md:text-3xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div
          className={cn(
            freelanceSectionCardClassName,
            "flex flex-col gap-4 p-6",
          )}
        >
          <h3 className="text-lg font-semibold">Servicios</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {workPrinciples.map(({ icon, title, description }) => (
          <FreelanceValueCard
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}
