import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface HomeExperienceCardProps {
  title: string;
  url: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

export default function HomeExperienceCard( { title, url, company, date, description, skills }: HomeExperienceCardProps ) {
    return (
      <div className="flex items-start gap-4 w-full border-t border-border pt-8">
        <div className="w-1/6">
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <div className=" flex flex-5/6 flex-col">
          <h2 className="text-lg font-bold">{title}</h2>
          <a
            className="flex items-center gap-1 text-primary hover:text-accent/80 duration-200 transition-all"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-muted-foreground my-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-foreground font-semibold bg-accent/10 border-accent/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    );
}