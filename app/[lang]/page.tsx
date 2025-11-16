import Experience from "../ui/experience/experience";
import Hero from "../ui/hero";
import Projects from "../ui/projects/projects";
import { getDictionary, type Locale } from "@/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="container mx-auto">
      <Hero
        title={dict.hero.title}
        description={dict.hero.description}
        scrollDown={dict.scrollIndicator.scrollDown}
      />
      <Experience
        title={dict.experience.title}
        jobs={[
          dict.experience.jobs.delectatech,
          dict.experience.jobs.perception,
          dict.experience.jobs.necsia,
        ]}
        lang={lang}
      />
      <Projects
        title={dict.projects.title}
        projects={[
          dict.projects.items.sesametime,
          dict.projects.items.astroweather,
          dict.projects.items.cluedogpt,
          dict.projects.items.booksummarizer,
          dict.projects.items.panoramahorizon,
          dict.projects.items.arpdos,
        ]}
      />
    </main>
  );
}
