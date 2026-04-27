import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

const LEGACY_PORTFOLIO_URL = "https://cmdev-portfolio.netlify.app/";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center px-4 py-12 sm:py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none fixed -top-32 left-1/2 -z-10 h-[min(110vw,44rem)] w-[min(110vw,44rem)] -translate-x-1/2 rounded-full bg-emerald-400/30 blur-[4rem] dark:bg-emerald-500/25"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-48 right-[-20%] -z-10 h-[min(90vw,28rem)] w-[min(90vw,28rem)] rounded-full bg-teal-500/25 blur-[3.5rem] dark:bg-teal-400/20"
      />

      <div className="relative w-full max-w-xl">
        <div
          aria-hidden
          className="absolute -inset-px rounded-2xl bg-linear-to-b from-border/80 via-border/40 to-transparent dark:from-border/50"
        />
        <div className="relative rounded-2xl border border-border/80 bg-card/75 px-6 py-10 shadow-sm backdrop-blur-md sm:px-10 sm:py-12 dark:border-border/60 dark:bg-card/70">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-xs backdrop-blur-sm">
                <Sparkles
                  className="size-3.5 shrink-0 text-primary"
                  aria-hidden
                />
                Nueva versión en preparación
              </span>
              <p className="text-sm font-medium text-foreground/90">
                Diego Cavadía · desarrollo frontend
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Estoy renovando{" "}
                <span className="bg-linear-to-r from-primary via-foreground/90 to-accent bg-clip-text text-transparent dark:via-foreground/80">
                  mi portafolio
                </span>
              </h1>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                La idea es una experiencia más clara y rápida para mostrar
                proyectos y experiencia. Si necesitas ver el contenido de hoy o
                charlar de una colaboración, todo sigue accesible en el enlace de
                abajo.
              </p>
            </div>

            <div className="h-px w-full max-w-xs bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto sm:min-w-[12rem]">
                <a
                  href={LEGACY_PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al portafolio actual
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="w-full sm:w-auto sm:min-w-[12rem]"
              >
                <a href="mailto:diegocamodev@gmail.com">
                  <Mail className="size-4" aria-hidden />
                  Escribirme
                </a>
              </Button>
            </div>

            <p className="max-w-sm text-pretty text-xs leading-relaxed text-muted-foreground">
              Gracias por pasarte. Vuelve pronto o usa{" "}
              <a
                href={LEGACY_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                cmdev-portfolio.netlify.app
              </a>{" "}
              mientras tanto.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
