"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types/data";
import Image from "next/image";

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="max-w-7xl">
      <div className="relative w-full h-96 min-h-[600px]">
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          {projects.map((project, idx) => (
            <a
              href={`/work/${project.url}`}
              key={idx}
              className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center opacity-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={project.hero.desktop.url}
                alt={project.title}
                fill
                className="rounded-lg shadow mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6">
                <h3 className="font-lato font-semibold uppercase text-sm tracking-widest mb-0 pb-0">
                  {project.title}
                </h3>
                <p className="text-left p-0 m-0">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
