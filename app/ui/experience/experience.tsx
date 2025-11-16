import { Job } from "@/app/lib/definitions";
import ExperienceItem from "./experience-item";

type ExperienceProps = {
  title: string;
  jobs: {
    title: string;
    company: string;
    description: string;
  }[];
  lang: string;
};

export default function Experience({
  title,
  jobs: jobsDict,
  lang,
}: ExperienceProps) {
  const jobs: Job[] = [
    {
      title: jobsDict[0].title,
      company: jobsDict[0].company,
      startDate: new Date(2023, 1, 1),
      endDate: null,
      description: jobsDict[0].description,
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
      title: jobsDict[1].title,
      company: jobsDict[1].company,
      startDate: new Date(2020, 8, 1),
      endDate: new Date(2022, 11, 31),
      description: jobsDict[1].description,
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
      title: jobsDict[2].title,
      company: jobsDict[2].company,
      startDate: new Date(2019, 4, 1),
      endDate: new Date(2020, 3, 30),
      description: jobsDict[2].description,
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
        {title}
      </h1>
      <div className="flex flex-col gap-[16vw] md:gap-[3vw]">
        {jobs.map((job) => (
          <ExperienceItem key={job.slug} job={job} lang={lang} />
        ))}
      </div>
    </section>
  );
}
