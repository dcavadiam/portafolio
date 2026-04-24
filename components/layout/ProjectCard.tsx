import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, CodeXml   } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  category: string;
  image: string;
  demo: string | null;
  code: string | null;
}

const IMAGE_SIZES = "(max-width: 768px) 100vw, 50vw";

export default function ProjectCard( { title, description, skills, category, image, demo, code }: ProjectCardProps ) {
  return (
    <div className="group flex h-full w-full min-w-0 flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl bg-muted">
        {image ? (
          <Image
            src={image}
            alt={`${title} — vista previa del proyecto`}
            fill
            loading="lazy"
            sizes={IMAGE_SIZES}
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-4xl text-muted-foreground/25">
              {title.charAt(0)}
            </span>
          </div>
        )}
        <Badge className="absolute right-3 top-3 z-10 shadow-sm">
          {category}
        </Badge>
      </div>
      <h3 className="text-2xl font-bold leading-tight">{title}</h3>
      <p className="min-h-0 flex-1 text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge variant="outline" key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
      <div className="mt-auto flex w-full flex-wrap items-center gap-2">
        {demo && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:text-primary hover:bg-accent/60"
          >
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" /> Demo
            </a>
          </Button>
        )}
        {code && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:text-primary hover:bg-accent/60"
          >
            <a href={code} target="_blank" rel="noopener noreferrer">
              <CodeXml className="w-4 h-4" /> Code
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
