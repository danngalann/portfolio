"use client";

import Image from "next-export-optimize-images/image";
import { useEffect, useState, useRef } from "react";
import { Tooltip } from "react-tooltip";
import { useInView } from "react-intersection-observer";

function ParallaxLayers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Layers with different depths (higher number = further away, less movement)
  const layers = [
    { src: "/4_background.png", depth: 0.3 },
    { src: "/3_clouds.png", depth: 0.3 },
    { src: "/2_plants.png", depth: 0.7 },
    { src: "/1_subject.png", depth: 1 },
  ];

  const movementFactor = 2;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "2/3" }}
    >
      {layers.map((layer, index) => (
        <div
          key={layer.src}
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePosition.x * layer.depth * movementFactor}px, ${mousePosition.y * layer.depth * movementFactor}px)`,
          }}
        >
          <Image
            src={layer.src}
            alt={`Layer ${index + 1}`}
            width={1024}
            height={1536}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}

function ScrollIndicator() {
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
          "data-tooltip-content": "Scroll down",
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
  return (
    <section className="relative h-screen flex items-center justify-center -mt-[72px] pt-[72px]">
      <div className="grid md:grid-cols-2 gap-4 p-6">
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="-ml-[0.07em] text-6xl uppercase">Daniel Galán</h1>
          <p className="text-xl">
            Full-stack developer with six years of experience building scalable
            web applications and AI-driven systems. Skilled in backend and
            frontend development, containerization, CI/CD, and VPS deployments,
            with a focus on clean architecture, performance, and automation. I
            combine technical depth with a systems-thinking approach to deliver
            efficient, maintainable solutions.
          </p>
        </div>
        <div className="hidden md:block max-w-lg">
          <ParallaxLayers />
        </div>
      </div>
      <ScrollIndicator />
      <Tooltip id="scroll-tooltip" />
    </section>
  );
}
