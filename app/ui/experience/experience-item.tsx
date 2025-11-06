import { getDateDiffInYears } from "@/app/lib/utils";
import TagList from "../tag-list";
import Link from "next/link";
import { Job } from "@/app/lib/definitions";

export default function ExperienceItem(job: Job) {
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
        <div>
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2 inline-block"
            href={`/experience/${slug}`}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
