import { Work } from "@/types/data";
import { getAllWorkItems } from "../../lib/api";
import Image from "next/image";

export default async function WorkList() {
  const workItems: Work[] = await getAllWorkItems();

  return (
    <>
      <Image
        src={"/images/logo.png"}
        alt={"North Point"}
        width={300}
        height={100}
        className="mb-20"
      />

      <h1 className="text-3xl font-bold mb-6 pb-6 border-b-slate-800">
        Our Work
      </h1>

      <ul className="max-w-6xl">
        {workItems.map((work) => (
          <li key={work.id} className="border-b pb-12 mb-12 border-b-slate-800">
            <h2 className="text-xl font-semibold">{work.title}</h2>
            <p className="max-w-[60%]">{work.description}</p>
            <div className="w-full h-[400px] relative rounded-sm">
              <Image
                src={work.hero.desktop.url}
                alt={work.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
