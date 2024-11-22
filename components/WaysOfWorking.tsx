import { WayOfWorking } from "@/types/data";

import FadeInSection from "./FadeInSection";

interface WaysOfWorkingProps {
  header: string;
  intro: string;
  ways: WayOfWorking[];
}

export default function WaysOfWorking({
  header,
  intro,
  ways,
}: WaysOfWorkingProps) {
  return (
    <section className="max-w-5xl">
      <FadeInSection>
        <h2 className="text-2xl font-semibold">{header}</h2>
        <p>{intro}</p>
      </FadeInSection>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {ways.map((way, idx) => (
          <FadeInSection key={idx} delay={idx * 100}>
            <div
              key={idx}
              className="p-4 pl-0 border-b border-b-gray-900 rounded-lg flex md:h-[250px]"
            >
              <div>
                <h3 className="font-semibold">{way.name}</h3>
                <p className="text-sm leading-6">{way.description}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
