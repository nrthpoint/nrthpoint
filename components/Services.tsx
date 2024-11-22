import { Service } from "@/types/data";

import FadeInSection from "./FadeInSection";

export default function Services({
  heading,
  intro,
  services,
}: {
  heading: string;
  intro: string;
  services: Service[];
}) {
  return (
    <section className="mt-6 max-w-6xl">
      <FadeInSection>
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p>{intro}</p>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {services.map((service, idx) => (
          <FadeInSection key={idx} delay={idx * 100}>
            <div
              key={idx}
              className="p-4 pl-0 border-b border-gray-900 md:h-[200px]"
            >
              <h3 className="mt-2 mb-2 font-semibold">{service.name}</h3>
              <p className="text-sm leading-6">{service.description}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
