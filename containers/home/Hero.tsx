import HeroChip from "@/components/HeroChip";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {

    const yearsOfExperience = new Date().getFullYear() - 2022;

  return (
    <section className="relative overflow-hidden py-20 w-full max-w-7xl mx-auto md:py-28 flex items-center justify-between gap-10">
      <div className="flex flex-col items-start justify-center gap-4">
        <HeroChip>Buscando nuevos retos y proyectos</HeroChip>
        <h1 className="text-6xl font-bold">
          Hola, soy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Diego Cavadia
          </span>
        </h1>
        <p className="text-muted-foreground text-center">
          Soy un desarrollador web full stack con más de 10 años de experiencia
          en el desarrollo de aplicaciones web.
        </p>
        <div className="flex items-center justify-center gap-2">
          <Button asChild>
            <Link href="/projects">
              Ver mis proyectos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contactar</Link>
          </Button>
        </div>
        {/* TODO: Add social media links */}
      </div>
      {/* Avatar/Photo area */}
      <div className="relative">
        <div className="relative mr-5 h-64 w-64 overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-primary-foreground/20 via-accent/35 to-primary-foreground/10 shadow-xl shadow-primary/10 ring-1 ring-accent/25 md:h-96 md:w-96 dark:from-primary-foreground/15 dark:via-accent/25 dark:to-primary-foreground/5 dark:shadow-accent/15">
          <Image
            src="/images/dcavadia.png"
            alt="Diego Cavadia — retrato"
            width={1080}
            height={1080}
            priority
          />
        </div>
        {/* Floating badge */}
        <div className="absolute -bottom-4 right-2 rounded-2xl border border-border bg-card px-4 py-2 shadow-lg">
          <p className="text-sm font-medium">+{yearsOfExperience} años exp.</p>
        </div>
      </div>
    </section>
  );
}
