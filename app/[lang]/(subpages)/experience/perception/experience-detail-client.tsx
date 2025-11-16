"use client";

import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { RiSparklingFill } from "react-icons/ri";
import { FaHandPaper } from "react-icons/fa";

type ExperienceDetailProps = {
  dict: {
    title: string;
    contents: string;
    sections: {
      overview: string;
      summary: string;
      keyTakeaways: string;
      experience: string;
    };
    tooltips: {
      ai: string;
      human: string;
    };
    overviewItems: string[];
    summaryText: string;
    keyTakeawaysItems: string[];
    experienceParagraphs: string[];
  };
  lang: string;
};

export default function ExperienceDetailClient({
  dict,
  lang,
}: ExperienceDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            {dict.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="lg:sticky lg:top-24 bg-light-background rounded-lg p-6 shadow-lg">
              <h2 className="text-base font-semibold uppercase tracking-wider mb-6">
                {dict.contents}
              </h2>
              <ul className="space-y-3 text-base">
                <li>
                  <Link
                    href="#overview"
                    className="text-foreground/80 hover:text-foreground transition-colors block py-1"
                  >
                    {dict.sections.overview}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#summary"
                    className="text-foreground/80 hover:text-foreground transition-colors block py-1"
                  >
                    {dict.sections.summary}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#key-takeaways"
                    className="text-foreground/80 hover:text-foreground transition-colors block py-1"
                  >
                    {dict.sections.keyTakeaways}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experience"
                    className="text-foreground/80 hover:text-foreground transition-colors block py-1"
                  >
                    {dict.sections.experience}
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-3 space-y-16">
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-foreground flex items-center gap-3">
                {dict.sections.overview}
                <RiSparklingFill
                  className="text-2xl"
                  data-tooltip-id="ai-tooltip"
                  data-tooltip-content={dict.tooltips.ai}
                />
              </h2>
              <div className="bg-light-background rounded-lg p-8 space-y-4">
                <ul className="list-disc list-inside space-y-4 text-lg text-foreground/90 leading-relaxed">
                  {dict.overviewItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Short Summary Section */}
            <section id="summary" className="scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                {dict.sections.summary}
                <RiSparklingFill
                  className="text-2xl"
                  data-tooltip-id="ai-tooltip"
                  data-tooltip-content={dict.tooltips.ai}
                />
              </h2>
              <div className="bg-light-background rounded-lg p-8">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {dict.summaryText}
                </p>
              </div>
            </section>

            {/* Key Takeaways Section */}
            <section id="key-takeaways" className="scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-foreground flex items-center gap-3">
                {dict.sections.keyTakeaways}
                <RiSparklingFill
                  className="text-2xl"
                  data-tooltip-id="ai-tooltip"
                  data-tooltip-content={dict.tooltips.ai}
                />
              </h2>
              <div className="bg-light-background rounded-lg p-8">
                <ul className="list-disc list-inside space-y-4 text-lg text-foreground/90 leading-relaxed">
                  {dict.keyTakeawaysItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-foreground flex items-center gap-3">
                {dict.sections.experience}
                <FaHandPaper
                  className="text-2xl"
                  data-tooltip-id="human-tooltip"
                  data-tooltip-content={dict.tooltips.human}
                />
              </h2>
              <div className="bg-light-background rounded-lg p-8 space-y-8">
                {dict.experienceParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-foreground/90 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      {/* Tooltips */}
      <Tooltip id="ai-tooltip" />
      <Tooltip id="human-tooltip" />
    </div>
  );
}
