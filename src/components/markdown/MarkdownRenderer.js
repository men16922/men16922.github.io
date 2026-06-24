import React from "react";

function renderInline(text) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export default function MarkdownRenderer({content}) {
  if (!content) {
    return null;
  }

  const lines = content.split("\n");
  const elements = [];
  let paragraph = [];
  let list = [];

  const flushParagraph = key => {
    if (paragraph.length) {
      elements.push(<p key={key}>{renderInline(paragraph.join(" "))}</p>);
      paragraph = [];
    }
  };

  const flushList = key => {
    if (list.length) {
      elements.push(
        <ul key={key}>
          {list.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph(`p-${index}`);
      flushList(`ul-${index}`);
      return;
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph(`p-${index}`);
      flushList(`ul-${index}`);
      elements.push(<h1 key={`h1-${index}`}>{renderInline(trimmed.slice(2))}</h1>);
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph(`p-${index}`);
      flushList(`ul-${index}`);
      elements.push(<h2 key={`h2-${index}`}>{renderInline(trimmed.slice(3))}</h2>);
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph(`p-${index}`);
      list.push(trimmed.slice(2));
      return;
    }

    flushList(`ul-${index}`);
    paragraph.push(trimmed);
  });

  flushParagraph("p-final");
  flushList("ul-final");

  return <>{elements}</>;
}
