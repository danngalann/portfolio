import { Project } from "@/app/lib/definitions";
import ProjectCard from "./project-card";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "SesameTime",
      description:
        "A little Chrome extension to aid in time management on flexible work schedules. Basically tells you when can you check out. I built it to help me and my coworkers with logistics.",
      link: "https://github.com/danngalann/sesametime",
      tags: ["JavaScript", "Chrome Extension", "Productivity"],
    },
    {
      title: "AstroWeather",
      description:
        "A frontend to quickly check weather conditions for astrophotography. It'll show data from a custom backend I've kept private for privacy concerns. I built it to simplify planning astrophotography sessions.",
      link: "https://github.com/danngalann/astroweather_next",
      tags: ["React", "TypeScript", "Astrophotography"],
    },
    {
      title: "Cluedo GPT",
      description:
        "An AI-powered version of the classic Cluedo game. A game master creates a mystery with custom characters, and players can interact with a chatbot to ask for clues and solve the case. I built it as an improvement to a team-building exercise we did at Delectatech.",
      link: "https://github.com/danngalann/cluedo-gpt",
      tags: ["Python", "PydanticAI", "LLMs", "AI"],
    },
    {
      title: "Book Summarizer",
      description:
        "This originally named set of scripts will split a digital book into chapters, and pass each chapter through an LLM to get a structured summary. This tool allows me to quickly generate notes from non-fiction books so I can store them in Obsidian for reference.",
      link: "https://github.com/danngalann/llm-ebook-summarizer",
      tags: ["Python", "PydanticAI", "LLMs", "AI"],
    },
    {
      title: "Panorama Horizon Maker",
      description:
        "Another small utility that can take a 360 image and help you generate an horizon file from it. This horizon file can then be used in astrophotography software to automate astronomy sessions.",
      link: "https://github.com/danngalann/panorama-horizon-maker",
      tags: ["Python", "Image Processing", "Astrophotography"],
    },
    {
      title: "ArpDos",
      description:
        "A nasty little thing I wrote back when I was studing to prank my classmates. It will cut internet access to every computer on a network (or at least it did in 2019). I'm showcasing it here as evidence to my interest an knowledge in cybersecurity and network protocols.",
      link: "https://github.com/danngalann/arpdos",
      tags: ["Python", "Networking", "Cybersecurity"],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-5xl uppercase mb-16">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
