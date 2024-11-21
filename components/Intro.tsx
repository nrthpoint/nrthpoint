import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";

interface IntroProps {
  tagline: string;
  intro: Document;
}

export default function Intro({ tagline, intro }: IntroProps) {
  return (
    <section className="max-w-5xl">
      <h1 className="text-2xl md:text-3xl font-normal leading-10">{tagline}</h1>
      <div className="prose my-4 md:max-w-[80%]">
        {documentToReactComponents(intro, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
              <p className="mb-4">{children}</p>
            ),
            [INLINES.HYPERLINK]: (node, children) => (
              <a
                href={node.data.uri}
                className="text-blue-500 underline hover:text-blue-700"
              >
                {children}
              </a>
            ),
          },
        })}
      </div>
    </section>
  );
}
