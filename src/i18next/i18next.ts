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
          welcome: "Welcome back,",
          goodbye: "See you later",
          homePage: "Home Page",
          news: "News",
          profile: "Profile",
          formLogin: "Login",
          password: "Password",
          logout: "Log Out",
          more: "Get More",
          check: "Invalid email or password. Please try again",
          newsHeading: "Top news on Ukraine",
          loading: "Loading...",
          personalData: "Personal Data",
          services: "Services",
          settings: "Settings",
          pending: "Pending...",
          copyright: "All rights reserved",
        },
      },
      ua: {
        translation: {
          login: "Увійти",
          loginText: "Будь ласка, введіть логін і пароль",
          welcome: "Вітаю,",
          goodbye: "До зустрічі!",
          homePage: "Головна",
          news: "Новини",
          profile: "Профіль",
          formLogin: "Логін",
          password: "Пароль",
          logout: "Вийти",
          more: "Більше",
          check: "Неправильний логін або пароль. Будь ласка, спробуйте ще раз",
          newsHeading: "Головні новини України",
          loading: "Завантажуємо...",
          personalData: "Особисті дані",
          services: "Послуги",
          settings: "Налаштування",
          pending: "В обробці...",
          copyright: "Захищено авторським правом",
        },
      },
    },
  });
