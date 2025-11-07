import { getDateDiffInYears } from "@/app/lib/utils";
import TagList from "../tag-list";
import Link from "next/link";
import { Job } from "@/app/lib/definitions";
import { LuArrowRight } from "react-icons/lu";

export default function ExperienceItem({ job }: { job: Job }) {
  const { title, company, startDate, endDate, description, tags, slug } = job;
  const duration = getDateDiffInYears(startDate, endDate);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl">
          {startDate.getFullYear()} -{" "}
          {endDate ? endDate.getFullYear() : "Present"}
        </div>
        <div className="text-xl">
          {duration} {duration === 1 ? "year" : "years"}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold uppercase">{title}</h1>
        <h2 className="text-lg ">{company}</h2>
        <p>{description}</p>
        <TagList tags={tags} />
        <Link
          className="flex justify-end gap-2 hover:cursor-pointer mt-4 hover:text-blue-800 transition-colors"
          href={`/experience/${slug}`}
        >
          <p>Read the details</p>
          <LuArrowRight />
        </Link>
      </div>
    </div>
  );
}
