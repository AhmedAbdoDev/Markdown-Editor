import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default function MarkdownPreview({ markdown }) {
  return (
    <div className="flex-1 md:w-1/2 flex flex-col overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Output
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="markdown-body dark:markdown-body p-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
