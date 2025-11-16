"use client";

import { Job } from "@/app/lib/definitions";
import ExperienceItem from "./experience-item";
import { useDictionary } from "@/app/contexts/dictionary-context";

export default function Experience() {
  const dict = useDictionary();

  const jobs: Job[] = [
    {
      title: dict.experience.jobs.delectatech.title,
      company: dict.experience.jobs.delectatech.company,
      startDate: new Date(2023, 1, 1),
      endDate: null,
      description: dict.experience.jobs.delectatech.description,
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
      title: dict.experience.jobs.perception.title,
      company: dict.experience.jobs.perception.company,
      startDate: new Date(2020, 8, 1),
      endDate: new Date(2022, 11, 31),
      description: dict.experience.jobs.perception.description,
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
      title: dict.experience.jobs.necsia.title,
      company: dict.experience.jobs.necsia.company,
      startDate: new Date(2019, 4, 1),
      endDate: new Date(2020, 3, 30),
      description: dict.experience.jobs.necsia.description,
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
        {dict.experience.title}
      </h1>
      <div className="flex flex-col gap-[16vw] md:gap-[3vw]">
        {jobs.map((job) => (
          <ExperienceItem key={job.slug} job={job} />
        ))}
      </div>
    </section>
  );
}
