import { Job } from "@/app/lib/definitions";
import ExperienceItem from "./experience-item";

export default function Experience() {
  const jobs: Job[] = [
    {
      title: "Full Stack & AI Developer",
      company: "Delectatech",
      startDate: new Date(2023, 1, 1),
      endDate: null,
      description:
        "Handled backend and frontend development with testing. Implemented GenAI and deep learning solutions. Managed VPS infrastructure and CI/CD pipelines with service containers.",
      tags: [
        "TypeScript",
        "React",
        "Node.js",
        "Angular",
        "Python",
        "Docker",
        "Jenkins",
        "GitHub",
        "MongoDB",
        "PostgreSQL",
        "ElasticSearch",
        "LangChain",
        "PydanticAI",
        "pytest",
        "Playwright",
      ],
      slug: "delectatech",
    },
    {
      title: "Full Stack Developer",
      company: "Perception",
      startDate: new Date(2020, 8, 1),
      endDate: new Date(2022, 11, 31),
      description:
        "Developed full stack applications with modern PHP frameworks and React. Managed databases and caching systems, containerized environments, CI pipelines, and server infrastructure.",
      tags: [
        "PHP",
        "Symfony",
        "MySQL",
        "Elasticsearch",
        "Redis",
        "React",
        "Next.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Docker",
        "GitLab",
        "Bitbucket",
      ],
      slug: "perception",
    },
    {
      title: "Java Developer",
      company: "Necsia IT Consulting",
      startDate: new Date(2019, 4, 1),
      endDate: new Date(2020, 3, 30),
      description:
        "Developed and maintained a Java application for Agbar, handling large amounts of data in DB2 and MySQL and providing seamless migration and integration between the two database systems.",
      tags: ["Java", "MySQL", "DB2", "SQL", "Eclipse"],
      slug: "necsia",
    },
  ];

  return (
    <section
      id="experience-section"
      className="flex flex-col items-center justify-center"
    >
      <h1 id="experience-header" className="text-5xl uppercase mb-16">
        Experience
      </h1>
      <div className="flex flex-col gap-[16vw] md:gap-[3vw]">
        {jobs.map((job) => (
          <ExperienceItem key={job.slug} job={job} />
        ))}
      </div>
    </section>
  );
}
