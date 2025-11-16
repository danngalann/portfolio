import { getDictionary, type Locale } from "@/dictionaries";
import ExperienceDetailClient from "./experience-detail-client";

export default async function DelectatechPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <ExperienceDetailClient
      dict={dict.experienceDetails.delectatech}
      lang={lang}
    />
  );
}
