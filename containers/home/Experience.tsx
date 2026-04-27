import HomeExperienceCard from "@/components/layout/HomeExperienceCard";

const experiences = [
  {
    title: "Desarrollador Front-end",
    url: "https://reservi.co",
    company: "Reservi",
    date: "06/2025 - Presente",
    location: "Remoto",
    description:
      "Diseño de funcionalidades escalables y centradas en el usuario, así como arquitecturas de componentes reutilizables usando React y el ecosistema moderno de JavaScript. Optimización del rendimiento de aplicaciones y garantía de compatibilidad cross-browser. Lidero integraciones de APIs, revisiones de código y colaboración con equipos multifuncionales.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "REST APIs",
      "TailwindCSS",
      "GitHub",
      "Figma",
      "Scrum",
    ],
  },
  {
    title: "Ingeniero de Software",
    url: "https://www.uninorte.edu.co",
    company: "Universidad del Norte",
    date: "01/2023 - 08/2025",
    location: "Barranquilla, Colombia",
    description:
      "Soporte técnico para ID Uninorte y participación en la migración y desarrollo de la nueva versión de Hola Uninorte. Implementé iniciativas de automatización que optimizaron flujos internos y brindé mentoría en el desarrollo del CMS Liferay.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Flutter",
      "Dart",
      "Figma",
      "GitHub",
      "Liferay 7.3",
    ],
  },
  {
    title: "Desarrollador Junior",
    url: "https://www.uninorte.edu.co",
    company: "Universidad del Norte",
    date: "01/2022 - 12/2022",
    location: "Barranquilla, Colombia",
    description:
      "Desarrollo de componentes para campañas de correo electrónico y construcción de componentes web para mejorar la experiencia de edición de contenido dentro del CMS institucional.",
    skills: ["HTML5", "CSS3", "JavaScript", "Figma", "Liferay 7.3"],
  },
];

export default function Experience() {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col justify-center gap-10">
      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="text-4xl font-bold"> Experiencia profesional</h2>
        <p className="text-muted-foreground">
          Mi trayectoria profesional en el desarrollo de software y las empresas
          donde he contribuido.
        </p>
      </div>
      {experiences.map((experience) => (
        <HomeExperienceCard
          key={experience.title}
          title={experience.title}
          url={experience.url}
          company={experience.company}
          date={experience.date}
          description={experience.description}
          skills={experience.skills}
        />
      ))}
    </section>
  );
};