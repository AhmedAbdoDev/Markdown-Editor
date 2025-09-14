export default function MarkdownEditor({ markdown, setMarkdown }) {
  return (
    <div className="flex-1 md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Input
        </h2>
      </div>
      <div className="flex-1 p-4">
        <textarea
          className="w-full h-full p-0 text-lg font-mono resize-none outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 rounded-lg shadow-inner"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Start writing your Markdown..."
        />
      </div>
    </div>
  );
}
