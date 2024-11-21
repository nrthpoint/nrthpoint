import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";

interface FooterProps {
  content: Document;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="text-white mt-12 max-w-6xl mb-4">
      <div className="prose prose-invert max-w-none">
        {documentToReactComponents(content, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
              <p className="mb-4">{children}</p>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
              <h2 className="text-sm font-semibold mb-4 text-gray-300">
                {children}
              </h2>
            ),
            [INLINES.HYPERLINK]: (node, children) => (
              <a
                href={node.data.uri}
                className="text-blue-300 underline hover:text-blue-500"
              >
                {children}
              </a>
            ),
          },
        })}
      </div>
    </footer>
  );
}
