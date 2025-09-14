"use client";

import { useState } from "react";
import MarkdownEditor from "../components/MarkdownEditor";
import MarkdownPreview from "../components/MarkdownPreview";
import "github-markdown-css/github-markdown-light.css";
import "github-markdown-css/github-markdown-dark.css";

export default function Home() {
  const [markdown, setMarkdown] = useState(
    `# Markdown Editor
---
## Live Preview
This editor uses **GitHub Flavored Markdown (GFM)**.

### Features
- [x] Task lists
- [x] Strikethrough
- [x] Tables

| Header 1 | Header 2 |
|----------|----------|
| Item 1   | Item 2   |

### Code Highlighting
\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`
`
  );

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </main>
    </div>
  );
}
