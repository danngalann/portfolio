"use client";

import Image from "next-export-optimize-images/image";
import { useEffect, useState, useRef } from "react";
import { Tooltip } from "react-tooltip";

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

  const movementFactor = 5;

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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-5px",
      },
    );

    const experienceHeader = document.querySelector("#experience-header");

    if (experienceHeader) {
      observer.observe(experienceHeader);
    }

    return () => {
      if (experienceHeader) {
        observer.unobserve(experienceHeader);
      }
    };
  }, []);

  return (
    <div
      data-tooltip-id="scroll-tooltip"
      data-tooltip-content="Scroll down"
      data-tooltip-place="right"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-8 h-14 border-2 border-gray-800 rounded-full flex justify-center p-2">
        <div className="w-2 h-2 bg-gray-800 rounded-full animate-scroll"></div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-4 p-6">
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-6xl">Daniel Galán</h1>
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
