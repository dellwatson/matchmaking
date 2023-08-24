import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import enJSON from './locale/en.json'
// import ptJSON from './locale/pt.json'

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  // supportedLngs: ["en", "vn", "cn", "ph", "ru"],
  detection: {
    order: ["cookie", "htmlTag"],
    caches: ["cookie"],
  },
  resources: {
    // en: { ...enJSON },
    // pt: { ...ptJSON },
  }, // Where we're gonna put translations' files
  lng: "en", // Set the initial language of the App
});
