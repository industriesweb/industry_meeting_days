"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function TextFileViewer({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => setContent(data))
      .catch((err) => console.error(err));
  }, [url]);

  return (
    <div className={`${className} whitespace-pre-wrap font-sans w-full`}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
}
