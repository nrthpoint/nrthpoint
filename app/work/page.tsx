import { Work } from "@/types/data";
import { getAllWorkItems } from "../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import { is } from "date-fns/locale";

export default async function WorkList() {
  const { isEnabled } = await draftMode();
  const workItems: Work[] = await getAllWorkItems(isEnabled);

  return (
    <div className="mt-20">
      <Link href={"/"}>
        <Image
          src={"/images/logo.png"}
          alt={"North Point"}
          width={200}
          height={50}
          className="mb-20"
        />
      </Link>

      <h1 className="text-3xl font-bold mb-6 pb-6 border-b-slate-800">
        Our Work
      </h1>

      <ul className="max-w-6xl">
        {workItems.map((work) => (
          <li key={work.id} className="border-b pb-12 mb-12 border-b-slate-800">
            <h2 className="text-xl font-semibold">{work.title}</h2>
            <p className="max-w-[60%]">{work.description}</p>
            <div className="w-full h-[400px] relative rounded-sm">
              <Link href={`/work/${work.url}`}>
                <Image
                  src={work.hero.desktop.url}
                  alt={work.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
