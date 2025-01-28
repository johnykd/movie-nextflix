import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          en: "EN",
          topTenInTVShowsToday: "#1 in TV Shows Today",
          play: "Play",
          moreInfo: "More Info",
          loading: "Loading...",
          error: "Error",
          navBar: {
            tvShows: "TV Shows",
            movies: "Movies",
            newPopular: "New & Popular",
            myList: "My List",
            browseByLanguages: "Browse by Languages",
            home: "Home",
          },
        },
      },
      th: {
        translation: {
          th: "TH",
          topTenInTVShowsToday: "#1 ในรายการทีวีวันนี้",
          play: "เล่น",
          moreInfo: "ข้อมูลเพิ่มเติม",
          loading: "กำลังโหลด...",
          error: "เกิดข้อผิดพลาด",
          navBar: {
            tvShows: "รายการทีวี",
            movies: "ภาพยนตร์",
            newPopular: "ใหม่และยอดนิยม",
            myList: "รายการของฉัน",
            browseByLanguages: "เรียกดูตามภาษา",
            home: "หน้าแรก",
          },
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
