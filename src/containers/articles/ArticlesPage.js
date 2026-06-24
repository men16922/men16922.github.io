import React from "react";
import {Link} from "react-router-dom";
import {greeting} from "../../portfolio";
import {articlePlatforms, getArticlesByLang} from "../../content/articles";
import "./ArticlesPage.scss";

function ArticleListItem({post, hubPath, formatDate}) {
  const content = (
    <>
      <div className="articles-list-source">
        <span>{post.source || "GitHub Blog"}</span>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </div>
      <div className="articles-list-copy">
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <span className="articles-list-meta">
          {post.category} · {post.readTime}
        </span>
      </div>
      <span className="articles-list-arrow" aria-hidden="true">
        {post.externalUrl ? "↗" : "→"}
      </span>
    </>
  );

  if (post.externalUrl) {
    return (
      <a
        className="articles-list-item"
        href={post.externalUrl}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className="articles-list-item" to={`${hubPath}/${post.slug}`}>
      {content}
    </Link>
  );
}

export default function ArticlesPage() {
  const isKoreanRoute = window.location.pathname.startsWith("/kr");
  const homePath = isKoreanRoute ? "/kr" : "/";
  const hubPath = isKoreanRoute ? "/kr/articles" : "/articles";
  const lang = isKoreanRoute ? "ko" : "en";
  const posts = getArticlesByLang(lang);
  const platforms = articlePlatforms[lang];

  const copy = isKoreanRoute
    ? {
        home: "홈",
        projects: "프로젝트",
        articles: "기술 글",
        language: "EN",
        languagePath: "/articles",
        title: "기술 글",
        description: "백엔드, 클라우드, AI Agent의 설계와 구현을 다룹니다.",
        platformsTitle: "외부 아티클 및 커뮤니티",
        platformsDescription:
          "외부 플랫폼에 발행한 독점 아티클과 커뮤니티 프로필을 연결합니다.",
        placeholder: "링크 입력 예정"
      }
    : {
        home: "Home",
        projects: "Projects",
        articles: "Articles",
        language: "KO",
        languagePath: "/kr/articles",
        title: "Technical articles",
        description:
          "Notes on backend systems, cloud architecture, and AI agents.",
        platformsTitle: "External articles and communities",
        platformsDescription:
          "Exclusive articles and community profiles published outside this site.",
        placeholder: "Link placeholder"
      };

  const formatDate = date =>
    new Intl.DateTimeFormat(isKoreanRoute ? "ko-KR" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(new Date(`${date}T00:00:00`));

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

        <main className="articles-index">
          {posts.map(post => (
            <ArticleListItem
              key={`${post.source}-${post.slug}`}
              post={post}
              hubPath={hubPath}
              formatDate={formatDate}
            />
          ))}
        </main>

        <section
          className="articles-platforms"
          aria-labelledby="platforms-title"
        >
          <div className="articles-platforms-header">
            <h2 id="platforms-title">{copy.platformsTitle}</h2>
            <p>{copy.platformsDescription}</p>
          </div>
          <div className="articles-platform-grid">
            {platforms.map(platform => {
              const content = (
                <>
                  <span className="articles-platform-mark" aria-hidden="true">
                    {platform.mark}
                  </span>
                  <div>
                    <h3>{platform.title}</h3>
                    <p>{platform.type}</p>
                  </div>
                  <span className="articles-platform-status">
                    {platform.url ? "↗" : copy.placeholder}
                  </span>
                </>
              );

              return platform.url ? (
                <a
                  key={platform.title}
                  className="articles-platform-card"
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={platform.title}
                  className="articles-platform-card is-placeholder"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
