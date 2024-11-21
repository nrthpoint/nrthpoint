import Image from "next/image";
import FadeInSection from "./FadeInSection";

interface Project {
  title: string;
  url: string;
  previewImage: { url: string };
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="max-w-7xl mt-6">
      <h2 className="text-2xl font-semibold mb-4">Featured</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <FadeInSection key={idx} delay={idx * 100}>
            <a
              href={`/work/${project.url}`}
              key={idx}
              className="block rounded-lg overflow-hidden shadow hover:shadow-lg relative w-full h-72"
            >
              <Image
                src={project.previewImage.url}
                alt={project.title}
                className="rounded-t-lg"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bg-black/50 left-0 right-0 bottom-0 p-4">
                <h3 className="p-2 font-lato font-semibold uppercase text-sm tracking-widest">
                  {project.title}
                </h3>
              </div>
            </a>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
