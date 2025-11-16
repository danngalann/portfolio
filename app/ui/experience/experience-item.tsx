import { getDateDiffInYears } from "@/app/lib/utils";
import TagList from "../tag-list";
import Link from "next/link";
import { Job } from "@/app/lib/definitions";
import { LuArrowRight } from "react-icons/lu";

export default function ExperienceItem({
  job,
  lang,
}: {
  job: Job;
  lang: string;
}) {
  const { title, company, startDate, endDate, description, tags, slug } = job;
  const duration = getDateDiffInYears(startDate, endDate);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-6xl">
          {startDate.getFullYear()} -{" "}
          {endDate ? endDate.getFullYear() : "Present"}
        </div>
        <div className="text-3xl italic">
          {duration} {duration === 1 ? "year" : "years"}
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-foreground text-black p-6 rounded-lg mx-4 md:mx-0">
        <h1 className="text-3xl font-bold uppercase">{title}</h1>
        <h2 className="text-lg ">{company}</h2>
        <p>{description}</p>
        <TagList tags={tags} />
        <Link
          className="flex justify-end items-center gap-2 hover:cursor-pointer mt-4 hover:text-blue-800 transition-colors"
          href={`/${lang}/experience/${slug}`}
        >
          <p>Read the details</p>
          <LuArrowRight />
        </Link>
      </div>
    </div>
  );
}
