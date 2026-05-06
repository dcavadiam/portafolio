import type { LucideIcon } from "lucide-react";

import { freelanceSectionCardClassName } from "@/lib/freelance-section-card";
import { cn } from "@/lib/utils";

type FreelanceValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export default function FreelanceValueCard({
  icon: Icon,
  title,
  description,
  className,
}: FreelanceValueCardProps) {
  return (
    <article
      className={cn(
        freelanceSectionCardClassName,
        "group relative flex flex-col gap-5 p-6 md:gap-6 md:p-7",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent shadow-sm",
          "ring-1 ring-inset ring-accent/15",
          "transition-[background-color,box-shadow,transform] duration-300 ease-out",
          "group-hover:bg-accent/18 group-hover:ring-accent/30 group-hover:shadow-md",
          "md:size-12 md:rounded-[0.9rem]",
        )}
        aria-hidden
      >
        <Icon className="size-5 md:size-[1.35rem]" strokeWidth={1.65} />
      </div>

      <div className="flex min-w-0 flex-col gap-2.5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem] md:leading-[1.65]">
          {description}
        </p>
      </div>
    </article>
  );
}
