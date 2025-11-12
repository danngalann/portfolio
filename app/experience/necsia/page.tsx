import Link from "next/link";

export default function NecsiaExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Necsia IT Consulting
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="lg:sticky lg:top-24 bg-light-background rounded-lg p-6 shadow-lg">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-4">
                Contents
              </h2>
              <ul className="space-y-2 text-sm">
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
          <article className="lg:col-span-3 space-y-12">
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Overview
              </h2>
              <div className="bg-light-background rounded-lg p-6 space-y-4">
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Contributed to the maintenance and development of a
                      large-scale Java desktop application used for data
                      migration and synchronization between DB2 and Oracle
                      databases.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Worked in a highly regulated, documentation-driven
                      environment, emphasizing precision and traceability over
                      speed.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Collaborated closely with senior and mid-level developers,
                      gaining exposure to real-world software engineering
                      standards and enterprise workflows.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Acquired hands-on experience with legacy codebases, manual
                      deployment, and database integrity validation.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Developed professional habits in technical documentation,
                      structured debugging, and change tracking—at a time before
                      version control systems were standard.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Experienced the transition to remote work during the onset
                      of the COVID-19 pandemic, adapting to asynchronous
                      communication and VPN-based workflows.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Learned valuable lessons about team communication,
                      expectation management, and the unpredictable nature of
                      early career opportunities.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Short Summary Section */}
            <section id="summary" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Short Summary
              </h2>
              <div className="bg-light-background rounded-lg p-6">
                <p className="text-foreground/90 leading-relaxed">
                  My first development role at Necsia immersed me in enterprise
                  Java systems, strict documentation workflows, and large-scale
                  data migrations. It was a formative experience marked by
                  growth, disruption from COVID, and an early lesson in
                  workplace uncertainty.
                </p>
              </div>
            </section>

            {/* Key Takeaways Section */}
            <section id="key-takeaways" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Key Takeaways
              </h2>
              <div className="bg-light-background rounded-lg p-6">
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Real-world exposure to enterprise-scale Java development
                      and database management.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Importance of documentation and process in maintaining
                      complex systems.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Early lessons in remote work adaptation during a global
                      crisis.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Experience navigating ambiguity and professional setbacks
                      early in a career.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-foreground/60 mt-1">•</span>
                    <span>
                      Foundational confidence that shaped later success in more
                      complex technical roles.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Experience
              </h2>
              <div className="bg-light-background rounded-lg p-6 space-y-6">
                <p className="text-foreground/90 leading-relaxed">
                  Necsia was my first serious job as a developer. At the time I
                  was looking for internships as part of my curriculum for my
                  studies at Vallbona. I consciously picked an internship
                  modality available at my school where you were required to
                  work more hours, receiving pay in exchange. To be more
                  specific, these were year-long internships instead of the
                  regular three-month internship usually offered in most Spanish
                  degree programs. The longer duration meant more experience and
                  the possibility of getting hired afterwards (COVID had other
                  ideas, but more on that later). The pay meant I was expected
                  to perform at a higher level of responsibility than a regular
                  intern.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  It was their recruitment team that found me and contacted me
                  via LinkedIn. Back then, on-site interviews were still in
                  fashion, and I went through a single interview before being
                  hired. The position was fully on-site, in the offices of the
                  World Trade Center in Barcelona. Getting my first serious job
                  in a glass maze with views of the sea was quite an
                  experience—especially when the police started raiding the
                  place for suspected drug trafficking (the offices are next to
                  the port). But that&apos;s a story for another day over
                  coffee.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  When I started, a mountain of onboarding documents landed on
                  my desk. After reading them all (and even understanding some
                  parts) I was given database access and began working. My task
                  was to develop and maintain a Java application with a small UI
                  utility that managed data migrations between several database
                  engines for Aigües de Barcelona (now Agbar Group).
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  The application was massive, full of legacy code and extensive
                  documentation, and overseen by a senior developer who knew the
                  entire system by heart. Our small team implemented new
                  features and fixed bugs while documenting nearly every change.
                  I don&apos;t recall any version control system being in place,
                  so documentation was crucial for tracking progress.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  As my internship was nearing its end, COVID hit hardest.
                  Remote work became a necessity, so we were allowed to take our
                  laptops home and were given VPN access to work remotely. This
                  was my first experience with remote work. The tasks remained
                  mostly the same, but communication suffered; our team
                  wasn&apos;t used to asynchronous coordination and relied
                  solely on basic messaging software.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  The ending took a darker turn. I was under the impression the
                  company planned to hire me after my internship, yet once my
                  contract ended, I heard nothing for weeks until an email
                  arrived instructing me to return my company laptop by mail. I
                  never received a clear explanation, but I suspect the company
                  reconsidered its team size due to the uncertainty of the COVID
                  period.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  Necsia was my first development experience, my first remote
                  work experience, and my first ghosting experience. The lessons
                  learned and the confidence gained in that single year would
                  later open doors to new opportunities across different teams,
                  stacks, and sectors.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
