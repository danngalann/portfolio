"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const hideOnPaths = ["/career", "/experience"];

  // Close drawer when pathname changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Hide navbar on experience detail pages
  if (hideOnPaths.some((path) => pathname.startsWith(path))) {
    return null;
  }

  const navLinks = [
    { href: "#experience-section", label: "Experience" },
    { href: "#projects-section", label: "Projects" },
    { href: "/career", label: "My career" },
  ];

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
        {/* Desktop navigation */}
        <ul className="hidden md:flex gap-8 p-6 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="relative group">
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile navigation - Hamburger button */}
        <div className="md:hidden flex justify-end p-6">
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isDrawerOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isDrawerOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isDrawerOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-foreground text-background z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 p-8 pt-24">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xl relative group block"
                onClick={() => setIsDrawerOpen(false)}
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
