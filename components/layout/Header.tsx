"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/experience", label: "Experiencia" },
    { href: "/projects", label: "Proyectos" },
    { href: "/freelance", label: "Freelance" },
    { href: "/contact", label: "Contacto" },
  ]

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between p-4 w-full sticky top-0 z-50 bg-background/50 backdrop-blur-sm border-b border-border">
      <h2 className="font-semibold text-xl">Diego Cavadia</h2>
      <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted",
                pathname === item.href
                  ? "text-accent"
                  : "text-muted-foreground"
              )}
            >   
              {item.label}
            </Link>
          ))}
        </nav>
      <ThemeToggle />
    </header>
  );
}
