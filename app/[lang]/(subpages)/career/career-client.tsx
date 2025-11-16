"use client";

import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { RiSparklingFill } from "react-icons/ri";
import { FaHandPaper } from "react-icons/fa";

type CareerPageProps = {
  dict: {
    title: string;
    contents: string;
    sections: {
      overview: string;
      summary: string;
      keyTakeaways: string;
      aboutMe: string;
    };
    tooltips: {
      ai: string;
      human: string;
    };
    overviewItems: string[];
    summaryText: string;
    keyTakeawaysItems: string[];
    aboutMeParagraphs: string[];
  };
  lang: string;
};

export default function CareerPage({ dict, lang }: CareerPageProps) {
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
                    href="#about-me"
                    className="text-foreground/80 hover:text-foreground transition-colors block py-1"
                  >
                    {dict.sections.aboutMe}
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

            {/* About Me Section */}
            <section id="about-me" className="scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-foreground flex items-center gap-3">
                About Me
                <FaHandPaper
                  className="text-2xl"
                  data-tooltip-id="human-tooltip"
                  data-tooltip-content="This section was written by a human (me!)"
                />
              </h2>
              <div className="bg-light-background rounded-lg p-8 space-y-8">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I developed a taste for technology at a very young age. Noisy
                  electronic toys were taken apart, and their speakers removed
                  (with help from my father, an electrician) to make them less
                  annoying. Over the years, I had to make do with cheap
                  equipment; my parents weren&apos;t keen on spoiling a child,
                  so our single low-spec family PC was all I had to satisfy my
                  curiosity. I broke it, many times, and each time I scrambled
                  through the web to learn how to fix it before my mother found
                  out.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  Around age fourteen, I realized I only had a few years left
                  before choosing what to do with my life, so I started thinking
                  early. I was fascinated by psychology and the human mind,
                  astronomy and physics, and technology. A quick search revealed
                  that programmers enjoyed abundant opportunities and high
                  salaries, so I chose programming and kept the other interests
                  as hobbies.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  I downloaded a phone app to learn C++; arguably not the most
                  beginner-friendly language, but I&apos;ve always believed you
                  should start with whatever draws you in. I liked video games,
                  and Google said they were written in C++, so I went with
                  that... until I discovered Python. I took Codecademy courses,
                  and after grasping the basics, I started building personal
                  projects. I&apos;d spend whole afternoons fighting with a
                  Python script that tried to draw a box around my face through
                  a webcam feed, completely absorbed.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  Around that time, I realized that learning English would
                  unlock countless learning opportunities, since most of the
                  material I wanted to consume was in that language. I already
                  had a basic foundation from school, but I took it upon myself
                  to improve by watching subtitled movies and later reading
                  books. I started with the Harry Potter films, since I knew
                  them by heart anyway, and to this day I read almost
                  exclusively in English, both fiction and non-fiction.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  When my secondary school offered programming and technology
                  classes, I enrolled in every one I could. We learned
                  programming fundamentals, CAD design, electronics, and more,
                  most of which I already had some grasp of. I even wrote a
                  small Android app to solve force-vector addition problems for
                  my physics class, which my teacher, to my displeasure,
                  considered cheating. I still maintain it wasn&apos;t. After
                  all, I wrote it myself.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  After secondary school, I completed a two-year mid-level
                  vocational program covering all things computer-related. We
                  disassembled hard drives and PCs and learned to navigate
                  terminals. For two years we worked on CentOS systems without a
                  GUI; the teacher told us, &quot;You&apos;ll hate me now, and
                  you&apos;ll thank me later.&quot; He was right on both counts.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  Later, I pursued a pair of advanced-level programs focused on
                  web, desktop, and mobile development. In theory, the studies
                  would have taken four years, but students with strong English
                  skills were allowed to take a mixed first year with all
                  subjects taught in English, earning two certifications in
                  three years instead of four. Through these studies, I secured
                  internships at{" "}
                  <Link
                    href="/experience/necsia"
                    className="text-cyan-300 hover:text-cyan-400 transition-colors"
                  >
                    Necsia IT Consulting
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/experience/perception"
                    className="text-cyan-300 hover:text-cyan-400 transition-colors"
                  >
                    Perception
                  </Link>
                  .
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  After a little over two years at{" "}
                  <Link
                    href="/experience/perception"
                    className="text-cyan-300 hover:text-cyan-400 transition-colors"
                  >
                    Perception
                  </Link>
                  , I received an offer to join an AI startup in the food
                  service industry:{" "}
                  <Link
                    href="/experience/delectatech"
                    className="text-cyan-300 hover:text-cyan-400 transition-colors"
                  >
                    Delectatech
                  </Link>
                  . The salary increase was modest, but the chance to work in
                  AI, a field I&apos;d dreamed about as a teenager, was too good
                  to pass up. It was my first time changing companies, my first
                  time in a startup, and my first hybrid role.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  Currently, I&apos;m focused on staying up to date with
                  technological progress and advancing my career. I&apos;m
                  working on projects like this portfolio, taking courses to
                  fill gaps in my skill set, and have even started learning a
                  new language (a challenge, since I tend to excel more at
                  technical tasks) while continuing to pursue mastery in my
                  hobbies.
                </p>
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
