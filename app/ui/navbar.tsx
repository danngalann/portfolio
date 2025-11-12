"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });
  const pathname = usePathname();

  // Hide navbar on experience detail pages
  if (pathname.startsWith("/experience/")) {
    return null;
  }

  return (
    <>
      {/* Sentinel element at the very top - not sticky */}
      <div ref={ref} className="h-0" />

      {/* Sticky navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          !inView ? "bg-foreground/70 backdrop-blur-md text-background" : ""
        }`}
      >
        <ul className="flex gap-8 p-6 justify-center">
          <li>
            <Link href="#experience-section" className="relative group">
              <span className="relative">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="#projects-section" className="relative group">
              <span className="relative">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="#about" className="relative group">
              <span className="relative">
                About me
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
