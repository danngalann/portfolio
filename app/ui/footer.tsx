import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/20 mt-16">
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center gap-8">
          <Link
            href="https://github.com/danngalann"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group hover:text-foreground/80 transition-colors duration-300"
          >
            <span className="relative">
              GitHub
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <span className="text-foreground/40">•</span>
          <Link
            href="https://www.linkedin.com/in/danngalann/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group hover:text-foreground/80 transition-colors duration-300"
          >
            <span className="relative">
              LinkedIn
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
