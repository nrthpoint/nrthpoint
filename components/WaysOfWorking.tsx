import { WayOfWorking } from "@/types/data";

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
    <section className="p-6 max-w-5xl">
      <h2 className="text-2xl font-semibold">{header}</h2>
      <p>{intro}</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {ways.map((way, idx) => (
          <div
            key={idx}
            className="p-4 pl-0 border-b border-b-gray-900 rounded-lg flex"
          >
            <div>
              <h3 className="font-semibold">{way.name}</h3>
              <p className="text-sm leading-6">{way.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
