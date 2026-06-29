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
      </div>
    </Fade>
  );
}
