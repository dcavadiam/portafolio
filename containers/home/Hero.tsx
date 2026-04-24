"use client";

import HeroChip from "@/components/HeroChip";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, FileTextIcon} from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const socialMedia = [
  {
    href: "https://github.com/dcavadiam",
    icon: GitHubLogoIcon,
    label: "GitHub",
  },
  
  {
    href: "https://linkedin.com/in/diego-cavadia-montes",
    icon: LinkedInLogoIcon,
    label: "LinkedIn",
  },
  
  {
    href: "mailto:diegocamodev@gmail.com",
    icon: EnvelopeClosedIcon,
    label: "Correo",
  },
  {
    href: "/files/resume.pdf",
    icon: FileTextIcon,
    label: "Currículum",
  },
];

export default function Hero() {
  const yearsOfExperience = new Date().getFullYear() - 2022;
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col items-start gap-10 overflow-x-clip md:flex-row md:items-start md:justify-between">
      <div className="flex min-w-0 w-full flex-col items-start justify-center gap-4 md:max-w-xl">
        <HeroChip>Buscando nuevos retos y proyectos</HeroChip>
        <h1 className="text-6xl font-bold">
          Hola, soy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Diego Cavadia
          </span>
        </h1>
        <p className="text-muted-foreground">
          Soy un ingeniero de software con más de 4 años de experiencia en el
          desarrollo de aplicaciones web y móviles.
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
        <div className="mt-2 flex items-center justify-start gap-3">
          {socialMedia.map((item) => {
            const Icon = item.icon;
            const isInternal = item.href.startsWith("/");
            const isMailto = item.href.startsWith("mailto:");
            const openInNewTab = !isInternal && !isMailto;
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    target={openInNewTab ? "_blank" : undefined}
                    rel={openInNewTab ? "noopener noreferrer" : undefined}
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    <Icon className="size-5" />
                    <span className="sr-only">{item.label}</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
      {/* Avatar/Photo area */}
      <div className="relative mx-auto w-fit shrink-0 md:mx-0">
        <div className="relative mr-5 h-64 w-64 rounded-3xl border border-border/40 bg-gradient-to-br from-primary-foreground/20 via-accent/35 to-primary-foreground/10 shadow-xl shadow-primary/10 ring-1 ring-accent/25 md:h-96 md:w-96 dark:from-primary-foreground/15 dark:via-accent/25 dark:to-primary-foreground/5 dark:shadow-accent/15">
          <div className="h-full w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/dcavadia.png"
              alt="Diego Cavadia — retrato"
              width={1080}
              height={1080}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
        {/* Floating badge */}
        <div className="absolute -bottom-4 right-2 rounded-2xl border border-border bg-card px-4 py-2 shadow-lg">
          <p className="text-sm font-medium">+{yearsOfExperience} años exp.</p>
        </div>
      </div>
    </section>
  );
}
