import React, {useContext} from "react";
import "./Talks.scss";
import Button from "../../components/button/Button";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  const isKoreanRoute = window.location.pathname.startsWith("/kr");
  const articlesPath = isKoreanRoute ? "/kr/articles" : "/articles";
  const ctaText = "Articles";

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          <Button text={ctaText} className="talk-cta" href={articlesPath} />
        </div>
        {talkSection.featured && talkSection.featured.length > 0 && (
          <div className="talk-featured-grid">
            {talkSection.featured.map((item, i) => (
              <div
                key={i}
                className={
                  isDark ? "dark-mode talk-featured-card" : "talk-featured-card"
                }
              >
                {item.image && (
                  <div className="talk-featured-media">
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      className="talk-featured-image"
                    />
                  </div>
                )}
                <div className="talk-featured-body">
                  {item.badge && (
                    <span className="talk-featured-badge">{item.badge}</span>
                  )}
                  <h3
                    className={
                      isDark
                        ? "dark-mode talk-featured-title"
                        : "talk-featured-title"
                    }
                  >
                    {item.title}
                  </h3>
                  <p
                    className={
                      isDark
                        ? "dark-mode talk-featured-subtitle"
                        : "talk-featured-subtitle"
                    }
                  >
                    {item.subtitle}
                  </p>
                  {item.links && item.links.length > 0 && (
                    <div className="talk-featured-actions">
                      {item.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target={link.external ? "_blank" : undefined}
                          rel={
                            link.external ? "noopener noreferrer" : undefined
                          }
                          className={
                            j === 0
                              ? "talk-featured-btn"
                              : "talk-featured-btn talk-featured-btn-secondary"
                          }
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fade>
  );
}
