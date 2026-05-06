import Hero from "@/containers/home/Hero";
import Skills from "@/containers/home/Skills";  
import Projects from "@/containers/home/Projects";
import Experience from "@/containers/home/Experience";
import Freelance from "@/containers/home/Freelance";
export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center gap-20 py-20">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Freelance />
    </div>
  );
}
