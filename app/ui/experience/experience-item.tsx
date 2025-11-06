import { getDateDiffInYears } from "@/app/lib/utils";
import TagList from "../tag-list";
import Link from "next/link";
import { Job } from "@/app/lib/definitions";

export default function ExperienceItem(job: Job) {
  const { title, company, startDate, endDate, description, tags, slug } = job;
  const duration = getDateDiffInYears(startDate, endDate);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <div>
          {startDate.getFullYear()} -{" "}
          {endDate ? endDate.getFullYear() : "Present"}
        </div>
        <div>
          {duration} {duration === 1 ? "year" : "years"}
        </div>
      </div>
      <div>
        <h1>{company}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <TagList tags={tags} />
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 inline-block"
          href={`/experience/${slug}`}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
