import Image from "next-export-optimize-images/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-4 p-6">
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-6xl">Daniel Galán</h1>
          <p>
            Full-stack developer with six years of experience building scalable
            web applications and AI-driven systems. Skilled in backend and
            frontend development, containerization, CI/CD, and VPS deployments,
            with a focus on clean architecture, performance, and automation. I
            combine technical depth with a systems-thinking approach to deliver
            efficient, maintainable solutions.
          </p>
        </div>
        <div className="hidden md:block max-w-lg">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={1024}
            height={1536}
          />
        </div>
      </div>
    </section>
  );
}
