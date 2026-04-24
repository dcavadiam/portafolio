import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HomeSkillCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

export default function HomeSkillCard( { title, icon: Icon, description, skills }: HomeSkillCardProps ) {
  return (
      <div
        className={cn(
          "group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg",
          "flex flex-col justify-between gap-4",
        )}
      >
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="rounded-full font-normal"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
