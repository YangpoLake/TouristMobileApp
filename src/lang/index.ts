import Vue from "vue";
import VueI18n from "vue-i18n";

import { language as Lang } from "../util/storage";

// User defined lang
import enLocale from "./en";
import zhLocale from "./zh";
import esLocale from "./es";
import jaLocale from "./ja";
import koLocale from "./ko";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  },
  es: {
    ...esLocale
  },
  ja: {
    ...jaLocale
  },
  ko: {
    ...koLocale
  }
};

export const getLocale = () => {
  const cookieLanguage = Lang.get();
  if (cookieLanguage) {
    return cookieLanguage;
  }

  const language = navigator.language.toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }

  // Default language is english
  return "en";
};

const i18n = new VueI18n({
  locale: getLocale(),
  messages
});

export default i18n;