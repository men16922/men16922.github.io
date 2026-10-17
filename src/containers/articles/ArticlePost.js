import React, {useEffect, useRef, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {marked} from "marked";
import {getPost, getTranslation} from "../../content/articles";
import ArticlesTopbar from "./ArticlesTopbar";
import "./ArticlesPage.scss";
import "./ArticlePost.scss";

// A post published on this site: markdown from public/posts/<slug>/<lang>.md,
// rendered in place (/articles/<slug>, /kr/articles/<slug>).
export default function ArticlePost() {
  const {slug} = useParams();
  const isKoreanRoute = window.location.pathname.startsWith("/kr");
  const lang = isKoreanRoute ? "ko" : "en";
  const homePath = isKoreanRoute ? "/kr" : "/";
  const articlesPath = isKoreanRoute ? "/kr/articles" : "/articles";
  const post = getPost(slug, lang);
  const other = post && getTranslation(post);
  const [html, setHtml] = useState(null);
  const [failed, setFailed] = useState(false);
  const body = useRef(null);

  const copy = isKoreanRoute
    ? {
        home: "홈",
        projects: "프로젝트",
        articles: "Articles",
        language: "EN",
        languagePath: other ? other.url : "/articles",
        back: "← 글 목록",
        loading: "불러오는 중…",
        failed: "글을 불러오지 못했습니다.",
        missing: "찾는 글이 없습니다.",
        updated: "수정"
      }
    : {
        home: "Home",
        projects: "Projects",
        articles: "Articles",
        language: "KO",
        languagePath: other ? other.url : "/kr/articles",
        back: "← All articles",
        loading: "Loading…",
        failed: "This article could not be loaded.",
        missing: "No article here.",
        updated: "Updated"
      };

  useEffect(() => {
    if (!post) return undefined;
    let alive = true;
    const previousTitle = document.title;
    document.title = post.title;
    setHtml(null);
    setFailed(false);
    fetch(post.source)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(md => alive && setHtml(marked.parse(md)))
      .catch(() => alive && setFailed(true));
    window.scrollTo(0, 0);
    return () => {
      alive = false;
      document.title = previousTitle;
    };
  }, [post]);

  // links to other sites open in a new tab
  useEffect(() => {
    if (!body.current) return;
    body.current.querySelectorAll('a[href^="http"]').forEach(a => {
      a.target = "_blank";
      a.rel = "noreferrer";
    });
  }, [html]);

  return (
    <div className="articles-page" lang={lang}>
      <div className="articles-shell">
        <ArticlesTopbar
          copy={copy}
          homePath={homePath}
          articlesPath={articlesPath}
        />
        <article className="post">
          <Link className="post-back" to={articlesPath}>
            {copy.back}
          </Link>
          {!post ? (
            <p className="post-status">{copy.missing}</p>
          ) : (
            <>
              <p className="post-meta">
                {post.date} · {post.category} · {post.readTime}
                {post.updated && ` · ${copy.updated} ${post.updated}`}
              </p>
              {failed && <p className="post-status">{copy.failed}</p>}
              {!failed && html === null && (
                <p className="post-status">{copy.loading}</p>
              )}
              {html !== null && (
                <div
                  className="post-body"
                  ref={body}
                  dangerouslySetInnerHTML={{__html: html}}
                />
              )}
            </>
          )}
        </article>
      </div>
    </div>
  );
}
