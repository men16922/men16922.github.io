import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useLocalStorage} from "./useLocalStorage";

export const useLanguage = () => {
  const location = useLocation();
  const [storedLang, setStoredLang] = useLocalStorage("preferredLanguage", "en");

  // Determine language from URL path
  const urlLang = location.pathname.startsWith("/kr") ? "ko" : "en";

  // Sync URL language with localStorage
  useEffect(() => {
    if (urlLang !== storedLang) {
      setStoredLang(urlLang);
    }
  }, [urlLang, storedLang, setStoredLang]);

  return [urlLang, setStoredLang];
};
