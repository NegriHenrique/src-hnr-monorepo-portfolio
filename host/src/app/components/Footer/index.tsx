import { useTranslation } from "react-i18next";

export function Footer() {
  const { t, i18n } = useTranslation("footer");
  return (
    <footer className="py-8 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-zinc-800 mt-auto">
      {t("copyright", { year: new Date().getFullYear() })}

      <select
        name="language"
        id="language"
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        <option value="en">English</option>
        <option value="pt-BR">Português</option>
      </select>
    </footer>
  );
}
