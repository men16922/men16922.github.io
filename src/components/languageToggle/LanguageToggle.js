import React, {useContext} from "react";
import {useLocation} from "react-router-dom";
import LanguageContext from "../../contexts/LanguageContext";
import "./LanguageToggle.scss";

const LanguageToggle = () => {
  const {language} = useContext(LanguageContext);
  const location = useLocation();

  const handleLanguageChange = () => {
    const newLang = language === "en" ? "ko" : "en";
    const newPath = newLang === "ko" ? "/kr/" : "/";

    // Save language preference to localStorage
    localStorage.setItem("preferredLanguage", newLang);

    // Preserve hash (anchor) if exists
    const hash = location.hash;

    // Use window.location.href to trigger a full page reload
    // This ensures portfolio.js re-evaluates and loads the correct language data
    window.location.href = newPath + hash;
  };

  return (
    <button
      className="language-toggle"
      onClick={handleLanguageChange}
      aria-label="Toggle language"
      title={language === "en" ? "한국어로 전환" : "Switch to English"}
    >
      <span className="language-text">{language === "en" ? "KO" : "EN"}</span>
    </button>
  );
};

export default LanguageToggle;
