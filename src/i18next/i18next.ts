import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEnglish from "./English/translationEnglish.json";
import translationUkrainian from "./Ukrainian/translationUkrainian.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: translationEnglish,
      ua: translationUkrainian,
    },
    lng: localStorage.getItem("i18nextLng") || "en",
  });
