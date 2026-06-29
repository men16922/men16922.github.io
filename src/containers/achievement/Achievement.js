import React, {useContext, useState, useEffect} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!achievementSection.display) {
    return null;
  }

  // Group certifications into categories (inferred from the title).
  const CATEGORY_ORDER = ["AWS", "Kubernetes", "Google Cloud", "misc"];
  const CATEGORY_LABEL = {
    AWS: "AWS",
    Kubernetes: "Kubernetes",
    "Google Cloud": "Google Cloud",
    misc: "Etc"
  };
  const categoryOf = title => {
    if (/AWS/i.test(title)) return "AWS";
    if (/Kubernetes/i.test(title)) return "Kubernetes";
    if (/Google/i.test(title)) return "Google Cloud";
    return "misc";
  };
  const grouped = {};
  achievementSection.achievementsCards.forEach(card => {
    const key = categoryOf(card.title);
    (grouped[key] = grouped[key] || []).push(card);
  });
  const orderedCategories = CATEGORY_ORDER.filter(key => grouped[key]);

  const content = (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1
            className={
              isDark
                ? "dark-mode heading achievement-heading"
                : "heading achievement-heading"
            }
          >
            {achievementSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {achievementSection.subtitle}
          </p>
        </div>
        {orderedCategories.map(key => (
          <div className="achievement-category" key={key}>
            <h2
              className={
                isDark
                  ? "dark-mode achievement-category-title"
                  : "achievement-category-title"
              }
            >
              {CATEGORY_LABEL[key]}
            </h2>
            <div className="achievement-cards-div">
              {grouped[key].map((card, i) => (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return isMobile ? (
    content
  ) : (
    <Fade bottom duration={1000} distance="20px">
      {content}
    </Fade>
  );
}
