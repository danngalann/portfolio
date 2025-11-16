"use client";

import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { RiSparklingFill } from "react-icons/ri";
import { FaHandPaper } from "react-icons/fa";

export default function DelectatechExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Delectatech
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="lg:sticky lg:top-24 bg-light-background rounded-lg p-6 shadow-lg">
              <h2 className="text-base font-semibold uppercase tracking-wider mb-6">
                Contents
              </h2>
              <ul className="space-y-3 text-base">
                <li>
                  <Link
                    href="#overview"
                    className="text-foreground/80 hover:text-foreground transition-colors block py-1"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="#summary"
                    className="text-foreground/80 hover:text-foreground transition-colors block py-1"
                  >
                    Short Summary
                  </Link>
                </li>
                <li>
                  <Link
                    href="#key-takeaways"
                    className="text-foreground/80 hover:text-foreground transition-colors block py-1"
                  >
                    Key Takeaways
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experience"
                    className="text-foreground/80 hover:text-foreground transition-colors block py-1"
                  >
                    Experience
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
                Overview
                <RiSparklingFill
                  className="text-2xl"
                  data-tooltip-id="ai-tooltip"
                  data-tooltip-content="This section was created with the aid of AI, from the 'Experience' section"
                />
              </h2>
              <div className="bg-light-background rounded-lg p-8 space-y-4">
                <ul className="list-disc list-inside space-y-4 text-lg text-foreground/90 leading-relaxed">
                  <li>
                    Joined Delectatech, an AI-driven startup in the food service
                    industry, as a backend developer with the opportunity to
                    expand into AI and data science.
                  </li>
                  <li>
                    Initially onboarded in data engineering, later transitioned
                    toward full-stack development while supporting AI-related
                    initiatives.
                  </li>
                  <li>
                    Realized a personal preference for software engineering over
                    data science, focusing on backend and AI implementation
                    rather than data pipelines.
                  </li>
                  <li>
                    Worked across multiple frameworks—Symfony, FastAPI, and
                    NestJS—and contributed to React and Angular frontends.
                  </li>
                  <li>
                    Built and maintained CI/CD pipelines with Jenkins and GitHub
                    Actions, automating testing, image building, and deployment
                    workflows.
                  </li>
                  <li>
                    Managed distributed systems involving RabbitMQ, Redis,
                    Elasticsearch, and Dockerized environments.
                  </li>
                  <li>
                    Implemented AI-powered and agentic solutions using PyTorch,
                    PydanticAI, and LangChain, including generative AI
                    integrations.
                  </li>
                  <li>
                    Adapted to the fast-paced startup environment, balancing
                    shifting priorities and incomplete projects with high
                    learning velocity.
                  </li>
                  <li>
                    Took on DevOps and project management duties, leading a
                    small cross-functional team through rapid development
                    cycles.
                  </li>
                  <li>
                    Currently focusing on cloud scalability and international
                    expansion initiatives.
                  </li>
                </ul>
              </div>
            </section>

            {/* Short Summary Section */}
            <section id="summary" className="scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                Short Summary
                <RiSparklingFill
                  className="text-2xl"
                  data-tooltip-id="ai-tooltip"
                  data-tooltip-content="This section was created with the aid of AI, from the 'Experience' section"
                />
              </h2>
              <div className="bg-light-background rounded-lg p-8">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  At Delectatech, I expanded from backend to full-stack and AI
                  development within a fast-moving startup. I built distributed
                  systems, automated pipelines, and led cross-functional teams
                  while refining my technical focus and leadership skills.
                </p>
              </div>
            </section>

            {/* Key Takeaways Section */}
            <section id="key-takeaways" className="scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-foreground flex items-center gap-3">
                Key Takeaways
                <RiSparklingFill
                  className="text-2xl"
                  data-tooltip-id="ai-tooltip"
                  data-tooltip-content="This section was created with the aid of AI, from the 'Experience' section"
                />
              </h2>
              <div className="bg-light-background rounded-lg p-8">
                <ul className="list-disc list-inside space-y-4 text-lg text-foreground/90 leading-relaxed">
                  <li>
                    Gained hands-on experience in AI implementation,
                    microservices, and distributed processing.
                  </li>
                  <li>
                    Strengthened expertise in backend and DevOps automation
                    through CI/CD and containerization.
                  </li>
                  <li>
                    Developed leadership and coordination skills by managing
                    small agile teams.
                  </li>
                  <li>
                    Learned adaptability and prioritization in a volatile
                    startup context.
                  </li>
                  <li>
                    Transitioned from aspiring data scientist to confident
                    software engineer and AI implementer.
                  </li>
                </ul>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <h2 className="text-4xl font-bold mb-8 text-foreground flex items-center gap-3">
                Experience
                <FaHandPaper
                  className="text-2xl"
                  data-tooltip-id="human-tooltip"
                  data-tooltip-content="This section was written by a human (me!)"
                />
              </h2>
              <div className="bg-light-background rounded-lg p-8 space-y-8">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  By the end of 2022, I was contacted by a recruitment
                  consultant working for Delectatech, an AI startup in the food
                  service industry. The role was similar to what I was already
                  doing (a backend position using Symfony) but it came with the
                  chance to work in AI and data science, something I had been
                  seeking for some time. I saw an opportunity to pivot my
                  specialization, so I left{" "}
                  <Link
                    href="/experience/perception"
                    className="text-cyan-300 hover:text-cyan-400 transition-colors"
                  >
                    Perception
                  </Link>{" "}
                  and, in 2023, started a new journey.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  During the first few weeks, I was onboarded by a senior data
                  engineer who introduced me to the company&apos;s data and AI
                  operations. I was also trained on the backend and frontend of
                  our SaaS platform. My role would involve both areas: the
                  full-stack application as part of my formal responsibilities,
                  and the data processes as part of my desired career path.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  In practice, I ended up leaning more toward full-stack
                  development. The senior data engineer left the company shortly
                  after I joined and was replaced by two juniors who had been
                  onboarded at the same time as me. They&apos;ve grown into
                  their roles and now handle all data-related tasks.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  It was enlightening to realize that, after actively pursuing a
                  role in AI and data science, I actually preferred software
                  development. Now, the Data team handles most of the data work,
                  and I only step in when more hands are needed, or focus on
                  strictly AI-related tasks such as generative AI implementation
                  and model training.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  Work in a startup is highly dynamic. Priorities change
                  constantly, and you need to manage frustration over unfinished
                  projects while finding satisfaction in the tasks you complete
                  and the lessons you learn. Learning opportunities are
                  plentiful. At Delectatech, I&apos;ve faced challenges ranging
                  from pesky, hard-to-debug issues to distributed AI-powered
                  processing of large data volumes.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  It&apos;s also common in startups to take on multiple roles.
                  What began as a backend-focused position has evolved into a
                  full-stack role with AI-related tasks. I&apos;ve moved from
                  Symfony and PHP to FastAPI with Python and NestJS with Node.
                  Building on the server knowledge I gained during my studies
                  and at{" "}
                  <Link
                    href="/experience/perception"
                    className="text-cyan-300 hover:text-cyan-400 transition-colors"
                  >
                    Perception
                  </Link>
                  , I&apos;ve built CI/CD pipelines with Jenkins and GitHub
                  Actions to improve iteration speed, execute automated tests,
                  and build Docker images for deployment on VPS instances.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  The wide range of roles and challenges has helped me build a
                  diverse technology stack. I&apos;ve worked on projects in
                  React and Angular on the frontend and with three different
                  backend frameworks. I&apos;ve used both relational and
                  non-relational databases, such as PostgreSQL and MongoDB,
                  along with specialized data-storage systems like Redis for
                  caching and Elasticsearch for fast retrieval of data.
                  I&apos;ve also implemented distributed task handling with
                  RabbitMQ and developed agentic AI solutions using PyTorch,
                  PydanticAI, and LangChain.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  The company is now expanding internationally, which brings a
                  new set of challenges we&apos;re actively tackling. I&apos;m
                  currently learning cloud technologies to help us scale
                  efficiently and adding some more DevOps responsibilities to my
                  skill set. I&apos;ve also taken on more responsibility as a
                  project manager for fast-paced project iterations, leading a
                  small cross-functional team of developers, data specialists,
                  and product professionals.
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
