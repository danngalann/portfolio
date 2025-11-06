import Link from "next/link";
import { getDateDiffInYears } from "../../lib/utils";
import TagList from "../tag-list";
import { Job } from "@/app/lib/definitions";
import ExperienceItem from "./experience-item";

export default function Experience() {
  const jobs: Job[] = [
    {
      title: "Full Stack Developer",
      company: "Delectatech",
      startDate: new Date(2022, 11, 1),
      endDate: null,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ratione illum incidunt eum ullam harum maxime, nisi saepe non in maiores dolorum nihil aut est corporis laudantium id exercitationem facilis blanditiis architecto quis voluptates recusandae perferendis ab! Animi, voluptate nulla.",
      tags: ["TypeScript", "React", "Node.js"],
      slug: "delectatech",
    },
    {
      title: "Full Stack Developer",
      company: "Perception",
      startDate: new Date(2020, 8, 1),
      endDate: new Date(2022, 11, 31),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ratione illum incidunt eum ullam harum maxime, nisi saepe non in maiores dolorum nihil aut est corporis laudantium id exercitationem facilis blanditiis architecto quis voluptates recusandae perferendis ab! Animi, voluptate nulla.",
      tags: ["PHP", "Laravel", "Vue.js"],
      slug: "perception",
    },
    {
      title: "Backend Developer",
      company: "Necsia IT Consulting",
      startDate: new Date(2019, 4, 1),
      endDate: new Date(2020, 3, 30),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ratione illum incidunt eum ullam harum maxime, nisi saepe non in maiores dolorum nihil aut est corporis laudantium id exercitationem facilis blanditiis architecto quis voluptates recusandae perferendis ab! Animi, voluptate nulla.",
      tags: ["PHP", "Symfony"],
      slug: "necsia-it-consulting",
    },
  ];

  return (
    <section className="flex flex-col gap-[3vw] items-center justify-center">
      {jobs.map((job) => (
        <ExperienceItem key={job.slug} {...job} />
      ))}
    </section>
  );
}
