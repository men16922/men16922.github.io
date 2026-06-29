import React, {useState} from "react";
import {Link} from "react-router-dom";
import {greeting} from "../../portfolio";
import {getPlatforms, getArticlesByPlatform} from "../../content/articles";
import "./ArticlesPage.scss";

function ArticleListItem({post}) {
  return (
    <a
      className="articles-list-item"
      href={post.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="articles-list-copy">
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <span className="articles-list-meta">
          {post.category} · {post.readTime}
        </span>
      </div>
      <span className="articles-list-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default function ArticlesPage() {
  const isKoreanRoute = window.location.pathname.startsWith("/kr");
  const homePath = isKoreanRoute ? "/kr" : "/";
  const lang = isKoreanRoute ? "ko" : "en";
  const platforms = getPlatforms(lang);

  const copy = isKoreanRoute
    ? {
        home: "홈",
        projects: "프로젝트",
        articles: "Articles",
        language: "EN",
        languagePath: "/articles",
        title: "Articles",
        description:
          "Backend/Cloud/AI 관심사에 대하여 작성한 글을 플랫폼별로 모았습니다.",
        empty: "아직 등록된 글이 없습니다.",
        visit: "방문"
      }
    : {
        home: "Home",
        projects: "Projects",
        articles: "Articles",
        language: "KO",
        languagePath: "/kr/articles",
        title: "Technical articles",
        description:
          "Writing on backend, cloud, and AI agents — organized by the platform each post lives on.",
        empty: "No posts here yet.",
        visit: "Visit"
      };

  // Default to the first platform that actually has posts; else the first tab.
  const firstWithPosts = platforms.find(
    p => getArticlesByPlatform(p.key).length > 0
  );
  const [activeKey, setActiveKey] = useState(
    (firstWithPosts || platforms[0] || {}).key
  );
  const [page, setPage] = useState(1);

  const activeChannel =
    platforms.find(p => p.key === activeKey) || platforms[0];
  const posts = activeChannel ? getArticlesByPlatform(activeChannel.key) : [];

  const PAGE_SIZE = 3;
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pagePosts = posts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  return (
    <div className="articles-page">
      <div className="articles-shell">
        <nav className="articles-topbar" aria-label="Article navigation">
          <Link to={homePath} className="articles-brand">
            {greeting.username}
          </Link>
          <div className="articles-nav-links">
            <Link to={homePath}>{copy.home}</Link>
            <Link to={`${homePath}#projects`}>{copy.projects}</Link>
            <span aria-current="page">{copy.articles}</span>
            <Link className="articles-language" to={copy.languagePath}>
              {copy.language}
            </Link>
          </div>
        </nav>

        <header className="articles-hero">
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </header>

        <div className="articles-tabs" role="tablist" aria-label="Platforms">
          {platforms.map(platform => {
            const count = getArticlesByPlatform(platform.key).length;
            return (
              <button
                key={platform.key}
                type="button"
                role="tab"
                aria-selected={platform.key === activeKey}
                className={
                  platform.key === activeKey
                    ? "articles-tab is-active"
                    : "articles-tab"
                }
                onClick={() => {
                  setActiveKey(platform.key);
                  setPage(1);
                }}
              >
                {platform.title}
                {count > 0 && (
                  <span className="articles-tab-count">{count}</span>
                )}
              </button>
            );
          })}
        </div>

        {activeChannel && (
          <div className="articles-tab-meta">
            <p>{activeChannel.description}</p>
            <a href={activeChannel.url} target="_blank" rel="noreferrer">
              {copy.visit} {activeChannel.title} ↗
            </a>
          </div>
        )}

        <main className="articles-index">
          {posts.length > 0 ? (
            pagePosts.map(post => (
              <ArticleListItem key={post.url} post={post} />
            ))
          ) : (
            <div className="articles-empty">
              <p>{copy.empty}</p>
              {activeChannel && (
                <a
                  href={activeChannel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="articles-empty-link"
                >
                  {copy.visit} {activeChannel.title} ↗
                </a>
              )}
            </div>
          )}
        </main>

        {totalPages > 1 && (
          <nav className="articles-pagination" aria-label="Pagination">
            <button
              type="button"
              className="articles-page-btn"
              disabled={safePage === 1}
              onClick={() => setPage(safePage - 1)}
              aria-label="Previous page"
            >
              ‹
            </button>
            {Array.from({length: totalPages}, (_, i) => i + 1).map(n => (
              <button
                key={n}
                type="button"
                className={
                  n === safePage
                    ? "articles-page-btn is-active"
                    : "articles-page-btn"
                }
                aria-current={n === safePage ? "page" : undefined}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              className="articles-page-btn"
              disabled={safePage === totalPages}
              onClick={() => setPage(safePage + 1)}
              aria-label="Next page"
            >
              ›
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
