"use client";

import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { RiSparklingFill } from "react-icons/ri";
import { FaHandPaper } from "react-icons/fa";

export default function PerceptionExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Perception
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
                    First fully remote position, requiring adaptation to a
                    digital-only workflow and the ability to integrate into
                    company culture without in-person contact.
                  </li>
                  <li>
                    Progressed from backend intern to full-stack developer,
                    assuming broader technical and organizational
                    responsibilities.
                  </li>
                  <li>
                    Gained strong foundations in software architecture, applying
                    Domain-Driven Design (DDD), hexagonal architecture, and CQRS
                    principles in production systems.
                  </li>
                  <li>
                    Contributed to backend systems using Symfony, RabbitMQ, and
                    Elasticsearch, while later leading frontend initiatives with
                    Next.js.
                  </li>
                  <li>
                    Developed internal automation tools to accelerate project
                    setup and improve developer efficiency, one of which was
                    later adapted and reused in a different company.
                  </li>
                  <li>
                    Expanded scope into server management, deployment
                    automation, and client communication, demonstrating
                    versatility and ownership.
                  </li>
                  <li>
                    Built key products such as Planeta de Libros, integrating
                    complex server-driven UI and CMS-style content scheduling.
                  </li>
                  <li>
                    Promoted multiple times due to initiative, technical growth,
                    and consistent delivery before transitioning to a new role
                    focused on AI development.
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
                  At Perception, I evolved from an intern into a full-stack
                  developer, mastering backend and frontend development within a
                  mature engineering culture. It was my first remote role and a
                  period of rapid growth in software design, autonomy, and
                  leadership.
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
                    Deep exposure to enterprise-grade software architecture and
                    design patterns.
                  </li>
                  <li>
                    Learned the value of mentorship, structured onboarding, and
                    feedback cycles.
                  </li>
                  <li>
                    Improved team productivity through automation and tooling
                    initiatives.
                  </li>
                  <li>
                    Transitioned from backend to full-stack, bridging technical
                    and client-facing roles.
                  </li>
                  <li>
                    Gained remote collaboration and cross-functional
                    communication skills.
                  </li>
                  <li>
                    Foundation for later advancement into AI-focused software
                    engineering.
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
                  Perception was my first step into professional web
                  development. I began as an intern and was later hired
                  full-time, gaining more autonomy and responsibility. The
                  company had over 30 years of experience building custom web
                  applications for clients across diverse sectors, which meant
                  their technical and architectural practices were already well
                  established.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  When I first joined the company, I was assigned a senior
                  backend developer as a mentor of sorts. He made me realize the
                  importance of mentorship and a solid onboarding process. I was
                  given courses, regular feedback, and opportunities for pair
                  programming. That onboarding phase became a major boost to my
                  career.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  I learned about software design patterns: we followed
                  clean-code practices and worked under a Domain-Driven Design
                  philosophy, using hexagonal architecture and applying CQRS to
                  our business logic. I also learned about technologies such as
                  Elasticsearch and message queues with RabbitMQ.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  After some time, I was given more autonomy and could pursue my
                  own improvement ideas. For example, when I noticed we were
                  spending an hour setting up a new codebase, I developed a fork
                  of PHP Maker Bundle to create projects in minutes. I later
                  built a similar tool using Cookiecutter and Python at{" "}
                  <Link
                    href="/experience/delectatech"
                    className="text-cyan-300 hover:text-cyan-400 transition-colors"
                  >
                    Delectatech
                  </Link>
                  . Developers at both companies appreciated the solution and
                  contributed to it.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  I also expanded into responsibilities beyond backend
                  development. I began managing servers and deployed services,
                  learning about Supervisor and other industry-standard tools
                  for deploying code to a VPS. At one point, I covered for a
                  colleague on leave who handled client communication, which
                  meant gathering requirements, creating tasks, and executing
                  them myself.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  I had dabbled in some frontend work with plain JavaScript, but
                  after discussions with other developers, we pushed for
                  adopting a frontend framework. We chose Next.js, which we used
                  to build the popular Planeta de Libros website. It was a
                  fascinating challenge to delve more seriously into frontend
                  development; the client wanted a server-driven UI where they
                  could manage and schedule entire page blocks from a management
                  application.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  I left the company after two and a half years and, if memory
                  serves me right, three promotions, to take a similar
                  full-stack position at{" "}
                  <Link
                    href="/experience/delectatech"
                    className="text-cyan-300 hover:text-cyan-400 transition-colors"
                  >
                    Delectatech
                  </Link>{" "}
                  and pursue the opportunity to work with AI.
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
