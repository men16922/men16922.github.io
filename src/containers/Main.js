import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {useLanguage} from "../hooks/useLanguage";
import "./Main.scss";

const Main = () => {
  const [isDark, setIsDark] = useState(() => {
    // White (light) theme is the default; only an explicit toggle persists.
    const stored = localStorage.getItem("themeMode");
    return stored === "dark";
  });
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const [language, setLanguage] = useLanguage();

  useEffect(() => {
    localStorage.setItem("themeMode", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLanguage = newLang => {
    setLanguage(newLang);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <LanguageProvider
        value={{language: language, changeLanguage: changeLanguage}}
      >
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <Greeting />
              <Skills />
              <WorkExperience />
              <Projects />
              <StartupProject />
              <Education />
              <Achievement />
              <Talks />
              <Profile />
              <Footer />
              <ScrollToTopButton />
            </>
          )}
        </StyleProvider>
      </LanguageProvider>
    </div>
  );
};

export default Main;
