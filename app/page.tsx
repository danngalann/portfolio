import Experience from "./ui/experience/experience";
import Hero from "./ui/hero";
import Projects from "./ui/projects/projects";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
