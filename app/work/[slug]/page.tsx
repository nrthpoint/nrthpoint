import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import FadeInSection from "@/components/FadeInSection";
import ResponsiveImage from "@/components/ResponsiveImage";
import { getAllWorkItemSlugs, getWorkItemBySlug } from "@/lib/api";

export async function generateStaticParams() {
  const slugs = await getAllWorkItemSlugs();
  return slugs.map((slug) => ({ slug: slug.url }));
}

type WorkPageParams = Promise<{ slug: string }>;

export default async function WorkPage({ params }: { params: WorkPageParams }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  const work = await getWorkItemBySlug(slug, isEnabled);

  if (!work) {
    return (
      <div>
        <h1>Not found</h1>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <FadeInSection>
        <Link href={"/work"}>
          <Image
            src={"/images/logo.png"}
            alt={work.title}
            width={200}
            height={100}
            className="mb-20"
          />
        </Link>
      </FadeInSection>

      <FadeInSection delay={500}>
        <h2>{work.title}</h2>

        {work.content && work.content.json && (
          <div className="max-w-5xl py-4">
            {documentToReactComponents(work.content.json, {
              renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
                [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
                [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
                [INLINES.HYPERLINK]: (node, children) => (
                  <a
                    href={node.data.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              },
            })}
          </div>
        )}
      </FadeInSection>

      <div className="flex justify-start items-start flex-col mb-12 gap-4 md:justify-between w-full pb-6 max-w-7xl">
        <FadeInSection delay={500}>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag, index) => (
              <h4
                key={index}
                className="bg-gray-900 inline-block text-white px-6 py-3 rounded-lg border-solid"
              >
                {tag}
              </h4>
            ))}
          </div>
        </FadeInSection>
      </div>

      <div className="max-w-6xl rounded-sm overflow-hidden">
        <FadeInSection>
          <ResponsiveImage
            desktop={work.hero.desktop.url}
            mobile={work.hero.mobile.url}
            alt={work.title}
          />
        </FadeInSection>
      </div>

      <div className="max-w-6xl">
        {work.galleryCollection.items.map((item, index) => (
          <FadeInSection key={index} delay={index * 100}>
            <div
              key={index}
              className="mt-8 rounded-sm overflow-hidden bg-[#ffffff14] relative"
            >
              <Image
                src={item.url}
                alt={item.title || work.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </div>
          </FadeInSection>
        ))}
      </div>

      <div>
        <FadeInSection delay={750}>
          <a
            href={work.link}
            className="p-3 text-black bg-white w-[150px] block rounded-lg text-center overflow-hidden text-xs font-bold uppercase border mt-10 border-black hover:bg-gray-100 hover:text-gray-800"
          >
            visit →
          </a>
        </FadeInSection>
      </div>
    </div>
  );
}
