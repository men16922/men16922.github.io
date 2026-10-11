import React from "react";
import {Link} from "react-router-dom";
import {greeting} from "../../portfolio";

// Top bar shared by the article list and article pages. `articlesPath` links
// back to the list; leave it out on the list itself (shown as the current page).
export default function ArticlesTopbar({copy, homePath, articlesPath}) {
  return (
    <nav className="articles-topbar" aria-label="Article navigation">
      <Link to={homePath} className="articles-brand">
        {greeting.username}
      </Link>
      <div className="articles-nav-links">
        <Link to={homePath}>{copy.home}</Link>
        <Link to={`${homePath}#projects`}>{copy.projects}</Link>
        {articlesPath ? (
          <Link to={articlesPath}>{copy.articles}</Link>
        ) : (
          <span aria-current="page">{copy.articles}</span>
        )}
        <Link className="articles-language" to={copy.languagePath}>
          {copy.language}
        </Link>
      </div>
    </nav>
  );
}
