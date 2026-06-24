import React, {useEffect, useState} from "react";
import {Link, Navigate, useParams} from "react-router-dom";
import {getArticleBySlug} from "../../content/articles";
import MarkdownRenderer from "../../components/markdown/MarkdownRenderer";
import "./ArticlesPage.scss";

export default function ArticleDetailPage() {
  const {slug} = useParams();
  const isKoreanRoute = window.location.pathname.startsWith("/kr");
  const lang = isKoreanRoute ? "ko" : "en";
  const hubPath = isKoreanRoute ? "/kr/articles" : "/articles";
  const article = getArticleBySlug(lang, slug);
  const [content, setContent] = useState("");

  useEffect(() => {
    let active = true;

    if (!article) {
      return undefined;
    }

    fetch(article.sourcePath)
      .then(response => response.text())
      .then(text => {
        if (active) {
          setContent(text);
        }
      })
      .catch(() => {
        if (active) {
          setContent("");
        }
      });

    return () => {
      active = false;
    };
  }, [article]);

  if (!article) {
    return <Navigate to={hubPath} replace />;
  }

  return (
    <div className="articles-page">
      <div className="articles-shell article-detail-shell">
        <div className="articles-topbar">
          <Link to={hubPath} className="articles-home-link">
            ← {isKoreanRoute ? "Articles로 돌아가기" : "Back to Articles"}
          </Link>
          <span className="articles-brand">{article.category}</span>
        </div>

        <article className="article-detail">
          <header className="article-detail-header">
            <div className="articles-card-tag">{article.category}</div>
            <h1>{article.title}</h1>
            <p className="article-detail-meta">
              {article.publishedAt} · {article.readTime}
            </p>
            <p className="articles-description">{article.excerpt}</p>
          </header>

          <div className="article-detail-content">
            <MarkdownRenderer content={content} />
          </div>
        </article>
      </div>
    </div>
  );
}
