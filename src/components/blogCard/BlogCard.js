import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  const isInternal = typeof blog.url === "string" && blog.url.startsWith("/");
  const target = isInternal ? "_self" : "_blank";
  const rel = isInternal ? undefined : "noreferrer";

  return (
    <div>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href={blog.url}
          target={target}
          rel={rel}
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
