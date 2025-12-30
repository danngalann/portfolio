"use client";

import { Project } from "@/app/lib/definitions";
import ProjectCard from "./project-card";
import { useDictionary } from "@/app/contexts/dictionary-context";

export default function Projects() {
  const dict = useDictionary();

  const projects: Project[] = [
    {
      title: dict.projects.items.homecaption.title,
      description: dict.projects.items.homecaption.description,
      link: "https://github.com/danngalann/homecaption",
      tags: ["Python", "NextJS", "Accessibility"],
    },
    {
      title: dict.projects.items.astroweather.title,
      description: dict.projects.items.astroweather.description,
      link: "https://github.com/danngalann/astroweather_next",
      tags: ["React", "TypeScript", "Astrophotography"],
    },
    {
      title: dict.projects.items.bluetoothtimer.title,
      description: dict.projects.items.bluetoothtimer.description,
      link: "https://github.com/danngalann/bluetooth-timer",
      tags: ["Android", "Kotlin"],
    },
    {
      title: dict.projects.items.booksummarizer.title,
      description: dict.projects.items.booksummarizer.description,
      link: "https://github.com/danngalann/llm-ebook-summarizer",
      tags: ["Python", "PydanticAI", "LLMs", "AI"],
    },
    {
      title: dict.projects.items.sesametime.title,
      description: dict.projects.items.sesametime.description,
      link: "https://github.com/danngalann/sesametime",
      tags: ["JavaScript", "Chrome Extension", "Productivity"],
    },
    {
      title: dict.projects.items.cluedogpt.title,
      description: dict.projects.items.cluedogpt.description,
      link: "https://github.com/danngalann/cluedo-gpt",
      tags: ["Python", "PydanticAI", "LLMs", "AI"],
    },
    {
      title: dict.projects.items.panoramahorizon.title,
      description: dict.projects.items.panoramahorizon.description,
      link: "https://github.com/danngalann/panorama-horizon-maker",
      tags: ["Python", "Image Processing", "Astrophotography"],
    },
  ];

  return (
    <section
      id="projects-section"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl uppercase my-16">{dict.projects.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
