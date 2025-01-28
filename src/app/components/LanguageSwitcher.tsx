import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage("en")} className="text-white">
        EN
      </button>
      <button onClick={() => changeLanguage("th")} className="text-white">
        TH
      </button>
    </div>
  );
};

export default LanguageSwitcher;
