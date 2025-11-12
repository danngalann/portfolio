"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function BackButton() {
  return (
    <nav className="sticky top-0 z-50 bg-foreground/70 backdrop-blur-md text-background">
      <div className="p-6">
        <Link
          href="/"
          className="flex items-center gap-2 relative group transition-all duration-300 hover:gap-3"
          aria-label="Go back"
        >
          <LuArrowLeft className="w-5 h-5" />
          <span className="relative">
            Back
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      </div>
    </nav>
  );
}
