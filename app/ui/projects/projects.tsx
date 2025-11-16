import { Project } from "@/app/lib/definitions";
import ProjectCard from "./project-card";

type ProjectsProps = {
  title: string;
  projects: {
    title: string;
    description: string;
  }[];
};

export default function Projects({
  title,
  projects: projectsDict,
}: ProjectsProps) {
  const projects: Project[] = [
    {
      title: projectsDict[0].title,
      description: projectsDict[0].description,
      link: "https://github.com/danngalann/sesametime",
      tags: ["JavaScript", "Chrome Extension", "Productivity"],
    },
    {
      title: projectsDict[1].title,
      description: projectsDict[1].description,
      link: "https://github.com/danngalann/astroweather_next",
      tags: ["React", "TypeScript", "Astrophotography"],
    },
    {
      title: projectsDict[2].title,
      description: projectsDict[2].description,
      link: "https://github.com/danngalann/cluedo-gpt",
      tags: ["Python", "PydanticAI", "LLMs", "AI"],
    },
    {
      title: projectsDict[3].title,
      description: projectsDict[3].description,
      link: "https://github.com/danngalann/llm-ebook-summarizer",
      tags: ["Python", "PydanticAI", "LLMs", "AI"],
    },
    {
      title: projectsDict[4].title,
      description: projectsDict[4].description,
      link: "https://github.com/danngalann/panorama-horizon-maker",
      tags: ["Python", "Image Processing", "Astrophotography"],
    },
    {
      title: projectsDict[5].title,
      description: projectsDict[5].description,
      link: "https://github.com/danngalann/arpdos",
      tags: ["Python", "Networking", "Cybersecurity"],
    },
  ];

  return (
    <section
      id="projects-section"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl uppercase my-16">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
