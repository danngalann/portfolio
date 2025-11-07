import { Project } from "@/app/lib/definitions";
import { FaGithub } from "react-icons/fa";
import TagList from "../tag-list";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="mx-4 md:mx-0 bg-foreground text-black border p-4 rounded-lg flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="my-2">{project.description}</p>
        <TagList tags={project.tags} />
      </div>
      <div className="flex justify-end">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center hover:text-blue-800"
        >
          <FaGithub className="mr-2" />
          View Project
        </a>
      </div>
    </div>
  );
}
