import { useTranslation } from "react-i18next";

export function Footer() {
  const { t, i18n } = useTranslation("footer");
  return (
    <footer className="py-12 text-center text-xs text-zinc-400 dark:text-zinc-600 border-t border-zinc-100 dark:border-zinc-900 mt-auto bg-white dark:bg-black">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 mx-auto">
        <span className="tracking-wide">
          {t("copyright", { year: new Date().getFullYear() })}
        </span>
        <select
          name="language"
          id="language"
          className="bg-transparent border border-zinc-200 dark:border-zinc-800 rounded px-3 py-1 text-xs"
          value={i18n.language}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="pt-BR">Português</option>
        </select>
      </div>
    </footer>
  );
}
