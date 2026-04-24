import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/layout/ProjectCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/project";
const projects: Project[] = [
  {
    id: "1",
    title: "Portafolio Personal",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    skills: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "personal",
    image: "/images/example.jpg",
    demo: "https://example.com",
    code: "https://example.com",
  },
  {
    id: "2",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    skills: ["React", "Tailwind CSS", "TypeScript"],
    category: "professional",
    demo: "https://example.com",
    code: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col justify-center gap-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-4xl font-bold">Proyectos destacados</h2>
          <p className="text-muted-foreground">
            Una selección de proyectos laborales y personales que demuestran mi
            experiencia y pasión por el desarrollo.
          </p>
        </div>
        <Link href="/projects" className="mt-4">
          <Button variant="outline" size="sm" className="cursor-pointer">
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          skills={project.skills}
          category={project.category}
          image={project.image || ""}
          demo={project.demo || null}
          code={project.code || null}
        />
      ))}
      </div>
    </section>
  );
}
