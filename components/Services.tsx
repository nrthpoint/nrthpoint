import { Service } from "@/types/data";

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
      <h2 className="text-2xl font-semibold">{heading}</h2>
      <p>{intro}</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {services.map((service, idx) => (
          <div key={idx} className="p-4 pl-0 border-b border-gray-900">
            <h3 className="mt-2 mb-2 font-semibold">{service.name}</h3>
            <p className="text-sm leading-6">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
