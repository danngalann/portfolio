"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDictionary, useLocale } from "@/app/contexts/dictionary-context";
import { type Locale } from "@/dictionaries";

export default function Navbar() {
  const dict = useDictionary();
  const lang = useLocale();
  const labels = dict.navbar;
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });
  const pathname = usePathname();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const hideOnPaths = [`/${lang}/career`, `/${lang}/experience`];

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
  if (pathname && hideOnPaths.some((path) => pathname.startsWith(path))) {
    return null;
  }

  const navLinks = [
    { href: `/${lang}#experience-section`, label: labels.experience },
    { href: `/${lang}#projects-section`, label: labels.projects },
    { href: `/${lang}/career`, label: labels.myCareer },
    { href: `/${lang}/chat`, label: labels.chat },
  ];

  const handleLanguageChange = (newLang: Locale) => {
    if (!pathname) return;

    // Replace current language in pathname with new language
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPathname);
  };

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
        <div className="hidden md:flex gap-8 p-6 justify-center items-center">
          <ul className="flex gap-8">
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

          {/* Language switcher */}
          <div className="flex gap-2 ml-4 pl-4 border-l border-current/30">
            <button
              onClick={() => handleLanguageChange("en")}
              className={`px-2 py-1 rounded transition-all ${
                lang === "en"
                  ? "bg-current/20 font-semibold"
                  : "hover:bg-current/10"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange("es")}
              className={`px-2 py-1 rounded transition-all ${
                lang === "es"
                  ? "bg-current/20 font-semibold"
                  : "hover:bg-current/10"
              }`}
              aria-label="Switch to Spanish"
            >
              ES
            </button>
          </div>
        </div>

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

          {/* Language switcher - Mobile */}
          <li className="pt-6 border-t border-current/30">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  handleLanguageChange("en");
                  setIsDrawerOpen(false);
                }}
                className={`flex-1 px-4 py-2 rounded transition-all ${
                  lang === "en"
                    ? "bg-current/20 font-semibold"
                    : "bg-current/10"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => {
                  handleLanguageChange("es");
                  setIsDrawerOpen(false);
                }}
                className={`flex-1 px-4 py-2 rounded transition-all ${
                  lang === "es"
                    ? "bg-current/20 font-semibold"
                    : "bg-current/10"
                }`}
                aria-label="Switch to Spanish"
              >
                ES
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
