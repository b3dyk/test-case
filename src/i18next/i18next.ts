import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          login: "Login",
          loginText: "Please Log In",
          homePage: "Home Page",
          news: "News",
          formLogin: "Login",
          password: "Password",
          logout: "Log Out",
          more: "Get More",
          check: "Invalid email or password. Please try again",
          loading: "Loading...",
          copyright: "All rights reserved",
        },
      },
      ua: {
        translation: {
          login: "Увійти",
          loginText: "Будь ласка, введіть логін і пароль",
          homePage: "Головна",
          news: "Новини",
          formLogin: "Логін",
          password: "Пароль",
          logout: "Вийти",
          more: "Більше",
          check: "Неправильний логін або пароль. Будь ласка, спробуйте ще раз",
          loading: "Завантажуємо...",
          copyright: "Захищено авторським правом",
        },
      },
    },
  });
