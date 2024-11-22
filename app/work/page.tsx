import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import FadeInSection from "@/components/FadeInSection";
import { getAllWorkItems } from "@/lib/api";
import { getProjectUrl as getProjectUrl } from "@/lib/utils";
import { Work } from "@/types/data";

export default async function WorkList() {
  const { isEnabled } = await draftMode();
  const workItems: Work[] = await getAllWorkItems(isEnabled);

  return (
    <div className="mt-20">
      <FadeInSection>
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt={"North Point"}
            width={200}
            height={50}
            className="mb-20"
          />
        </Link>
      </FadeInSection>

      <FadeInSection>
        <h1 className="text-3xl font-bold mb-6 pb-6 border-b-slate-800">
          Our Work
        </h1>
      </FadeInSection>

      <ul className="max-w-6xl grid md:grid-cols-2 gap-4 gap-y-20">
        {workItems.map((work, idx) => (
          <FadeInSection delay={idx * 100} key={idx}>
            <li
              key={work.id}
              className="border-b pb-12 border-b-slate-800 h-[400px]"
            >
              <h2 className="text-xl font-semibold pb-6">{work.title}</h2>
              <div className="w-full h-[200px] relative rounded-sm">
                <Link href={getProjectUrl(work)}>
                  <Image
                    src={work.previewImage.url}
                    alt={work.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-sm"
                  />
                </Link>
              </div>
              <p className="max-w-[80%] absolute bottom-2 h-[100px]">
                {work.description}
              </p>
            </li>
          </FadeInSection>
        ))}
      </ul>
    </div>
  );
}
