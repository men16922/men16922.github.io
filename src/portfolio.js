// Language Abstraction Layer
// Dynamically selects and re-exports portfolio data based on URL path

import * as en from "./portfolioData/portfolio.en";
import * as ko from "./portfolioData/portfolio.ko";

// Determine language from URL path
const getLanguage = () => {
  const path = window.location.pathname;
  if (path.startsWith("/kr")) return "ko";
  const stored = localStorage.getItem("preferredLanguage");
  return stored || "en";
};

const lang = getLanguage();
const data = lang === "ko" ? ko : en;

// Re-export all sections to maintain backward compatibility
export const illustration = data.illustration;
export const greeting = data.greeting;
export const socialMediaLinks = data.socialMediaLinks;
export const splashScreen = data.splashScreen;
export const skillsSection = data.skillsSection;
export const educationInfo = data.educationInfo;
export const techStack = data.techStack;
export const workExperiences = data.workExperiences;
export const openSource = data.openSource;
export const bigProjects = data.bigProjects;
export const achievementSection = data.achievementSection;
export const blogSection = data.blogSection;
export const talkSection = data.talkSection;
export const podcastSection = data.podcastSection;
export const contactInfo = data.contactInfo;
export const twitterDetails = data.twitterDetails;
export const isHireable = data.isHireable;
export const resumeSection = data.resumeSection;
