import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  const primaryLabel = talkDetails.primaryLabel || "View";
  const secondaryLabel = talkDetails.secondaryLabel || "Open";

  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              {primaryLabel}
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
