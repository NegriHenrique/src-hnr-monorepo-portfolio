import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./locales/pt.json";
import en from "./locales/en.json";

i18n.use(initReactI18next).init({
  fallbackLng: "pt",
  ns: [
    "hero",
    "works",
    "description",
    "contact",
    "clients",
    "services",
    "media",
    "footer",
  ],
  resources: {
    pt: pt,
    en: en,
  },
});

export default i18n;
