"use client";

import { useEffect, useState, useRef } from "react";
import { Tooltip } from "react-tooltip";
import { useInView } from "react-intersection-observer";
import { useDictionary } from "@/app/contexts/dictionary-context";

// Technology words that float around the hero section
const TECHNOLOGIES = [
  "MongoDB",
  "Elasticsearch",
  "Grafana",
  "Kibana",
  "Prometheus",
  "Python",
  "FastAPI",
  "Jenkins",
  "Bitbucket",
  "Github",
  "MySQL",
  "PostgreSQL",
  "Node.js",
  "Next.js",
  "NestJS",
  "Express",
  "JWT",
  "RabbitMQ",
  "Docker",
  "PHP",
  "CI/CD",
  "TypeScript",
  "JavaScript",
  "Angular",
];

// Number of times to repeat each technology word
const WORD_REPETITIONS = 1;

interface FloatingWord {
  text: string;
  x: number; // percentage position
  y: number; // percentage position
  depth: number; // parallax depth (0-1, higher = more movement)
  size: number; // font size multiplier
  opacity: number; // base opacity
}

// Helper function to generate floating word positions
function generateFloatingWords(): FloatingWord[] {
  const generatedWords: FloatingWord[] = [];
  const minDistance = 12; // Minimum distance between words (in percentage)

  // Create repeated array of technologies
  const repeatedTechnologies = TECHNOLOGIES.flatMap((tech) =>
    Array(WORD_REPETITIONS).fill(tech),
  );

  for (const tech of repeatedTechnologies) {
    let x: number = 0;
    let y: number = 0;
    let attempts = 0;
    const maxAttempts = 50;

    // Keep trying until we get a good position
    do {
      // Add padding from edges (10% on each side)
      x = 10 + Math.random() * 80;
      y = 20 + Math.random() * 60; // Middle 60% vertically (avoid top/bottom 20%)
      attempts++;

      // Check if this position is too close to the center or other words
      const tooCloseToCenter = x > 25 && x < 75 && y > 30 && y < 70;
      const tooCloseToOthers = generatedWords.some((word) => {
        const distance = Math.sqrt(
          Math.pow(word.x - x, 2) + Math.pow(word.y - y, 2),
        );
        return distance < minDistance;
      });

      if (!tooCloseToCenter && !tooCloseToOthers) {
        break;
      }
    } while (attempts < maxAttempts);

    generatedWords.push({
      text: tech,
      x,
      y,
      depth: 0.3 + Math.random() * 0.7, // Random depth between 0.3 and 1
      size: 1 + Math.random() * 2, // Random size between 1 and 3rem
      opacity: 0.1 + Math.random() * 0.2, // Random opacity between 0.1 and 0.3
    });
  }

  return generatedWords;
}

function FloatingTechWords() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [words, setWords] = useState<FloatingWord[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Generate random positions only on client side to avoid hydration mismatch
  useEffect(() => {
    // Schedule state updates asynchronously to avoid the setState-in-effect warning
    Promise.resolve().then(() => {
      setIsMounted(true);
      setWords(generateFloatingWords());
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate normalized position (-1 to 1)
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const movementFactor = 20; // How much the words move

  // Don't render words until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div
        ref={containerRef}
        className="hidden lg:block absolute inset-0 pointer-events-none w-full px-4"
        style={{ overflow: "hidden" }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="hidden lg:block absolute inset-0 pointer-events-none w-full px-4"
      style={{ overflow: "hidden" }}
    >
      {words.map((word, index) => (
        <div
          key={`${word.text}-${index}`}
          className="absolute transition-transform duration-300 ease-out select-none whitespace-nowrap font-medium"
          style={{
            left: `${word.x}%`,
            top: `${word.y}%`,
            transform: `translate(-50%, -50%) translate(${mousePosition.x * word.depth * movementFactor}px, ${mousePosition.y * word.depth * movementFactor}px)`,
            opacity: word.opacity,
            fontSize: `${word.size}rem`,
            color: "currentColor",
          }}
        >
          {word.text}
        </div>
      ))}
    </div>
  );
}

function ScrollIndicator({ scrollDown }: { scrollDown: string }) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-5px",
  });

  return (
    <>
      {/* Target element to observe */}
      <div
        ref={ref}
        id="experience-header-observer"
        className="absolute bottom-0 left-0 w-full h-px pointer-events-none"
      />

      <div
        {...(!inView && {
          "data-tooltip-id": "scroll-tooltip",
          "data-tooltip-content": scrollDown,
          "data-tooltip-place": "right",
        })}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          inView ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-8 h-14 border-2 border-foreground rounded-full flex justify-center p-2">
          <div className="w-2 h-2 bg-foreground rounded-full animate-scroll"></div>
        </div>
      </div>
    </>
  );
}

export default function Hero() {
  const dict = useDictionary();

  return (
    <section className="relative h-screen flex items-center justify-center -mt-[72px] pt-[72px] overflow-hidden">
      <FloatingTechWords />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-bold mb-6 md:mb-8">
          {dict.hero.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed">
          {dict.hero.description}
        </p>
      </div>
      <ScrollIndicator scrollDown={dict.scrollIndicator.scrollDown} />
      <Tooltip id="scroll-tooltip" />
    </section>
  );
}
