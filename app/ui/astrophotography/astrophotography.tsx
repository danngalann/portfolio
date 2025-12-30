"use client";

import Link from "next/link";
import { useDictionary } from "@/app/contexts/dictionary-context";
import AstroGallery from "./astro-gallery";

export default function Astrophotography() {
  const dict = useDictionary();

  return (
    <section
      id="projects-section"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl uppercase my-16">{dict.astro.title}</h1>
      <div className="mx-4 md:mx-0 mb-12">
        {dict.astro.content.map((paragraph, index) => (
          <p key={index} className="max-w-full text-lg mb-4">
            {paragraph}
            {index === dict.astro.content.length - 1 &&
              dict.astro.instagram && (
                <Link
                  href={dict.astro.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:cursor-pointer mt-4 hover:text-blue-800 transition-colors"
                >
                  {dict.astro.instagram.text}
                </Link>
              )}
          </p>
        ))}
      </div>
      <AstroGallery media={dict.astro.media} />
    </section>
  );
}
