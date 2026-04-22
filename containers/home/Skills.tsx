import { 
    Code2, 
    Database, 
    Palette, 
    Server, 
    Smartphone, 
    Workflow 
  } from "lucide-react"
import HomeSkillCard from "@/components/layout/HomeSkillCard";

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Astro"],
      description: "Interfaces modernas y accesibles con las mejores prácticas",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "GraphQL", "REST APIs"],
      description: "Integración de APIs, gestión de bases de datos y seguridad",
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["Dart", "Flutter", "iOS", "Android"],
      description: "Aplicaciones nativas y multiplataforma de alto rendimiento",
    },
    {
      title: "Bases de Datos",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Supabase"],
      description: "Modelado de bases de datos eficiente y optimización de consultas",
    },
    {
      title: "Diseño",
      icon: Palette,
      skills: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
      description: "Diseño centrado en el usuario y creación de sistemas de diseño",
    },
  ]
  
export default function Skills() {
  return (
    <section className="relative overflow-hidden w-full max-w-7xl mx-auto flex flex-col justify-center gap-10">
      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="text-4xl font-bold">Habilidades & Tecnologías</h2>
        <p className="text-muted-foreground">
        Tecnologías y herramientas con las que trabajo para crear soluciones digitales completas y de calidad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => (
            <HomeSkillCard key={category.title} title={category.title} icon={category.icon} description={category.description} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}