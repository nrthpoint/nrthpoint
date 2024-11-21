import ResponsiveImage from "@/components/ResponsiveImage";
import { getAllWorkItemSlugs, getWorkItemBySlug } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getAllWorkItemSlugs();
  return slugs.map((slug) => ({ slug: slug.url }));
}

type tParams = Promise<{ slug: string }>;

export default async function WorkPage({ params }: { params: tParams }) {
  const { slug } = await params;
  const work = await getWorkItemBySlug(slug);

  if (!work) {
    return (
      <div>
        <h1>Not found</h1>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <Image
        src={"/images/logo.png"}
        alt={work.title}
        width={300}
        height={100}
        className="mb-20"
      />

      <h2>{work.title}</h2>

      {work.content && work.content.json && (
        <div className="max-w-5xl py-4 mb-12">
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

      <div className="flex justify-between items-center w-full py-6 max-w-7xl">
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag, index) => (
            <h4
              key={index}
              className="bg-gray-900 inline-block text-white px-6 py-3 rounded-full border-solid"
            >
              {tag}
            </h4>
          ))}
        </div>

        <a
          href={work.link}
          className="p-4 bg-white block overflow-hidden text-black text-xs font-bold uppercase rounded-full border border-black hover:bg-gray-100"
        >
          visit
        </a>
      </div>

      <div className="max-w-7xl rounded-sm overflow-hidden">
        <ResponsiveImage
          desktop={work.hero.desktop.url}
          mobile={work.hero.mobile.url}
          alt={work.title}
        />
      </div>

      <div className="max-w-7xl">
        {work.galleryCollection.items.map((item, index) => (
          <div
            key={index}
            className="mt-8 rounded-sm overflow-hidden bg-[#ffffff14] relative"
          >
            <div className="w-full h-[800px] overflow-hidden relative">
              <Image
                src={item.url}
                fill
                style={{
                  objectFit: "cover",
                }}
                alt={item.title}
              />
            </div>

            {/* <div className="p-6">
              <h3 className="p-0">{item.title}</h3>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
