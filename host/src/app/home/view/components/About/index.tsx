import { useTranslation } from "react-i18next";

export type AboutProps = {
  headline: string;
  introText?: string;
  processes?: any[];
};

export function About({ headline, introText, processes }: AboutProps) {
  const { t } = useTranslation("about");
  return (
    <section className="py-24 px-4 max-w-2xl mx-auto w-full text-center">
      <h2 className="text-4xl sm:text-5xl font-light mb-8 text-black dark:text-white tracking-tight">
        {headline || t("headline")}
      </h2>
      {introText && (
        <div
          className="mb-8 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: introText }}
        />
      )}
      {processes && processes.length > 0 && (
        <ul className="flex flex-col gap-2 items-center">
          {processes.map((proc, idx) => (
            <li
              key={idx}
              className="text-base text-zinc-500 dark:text-zinc-400"
            >
              {proc.title || JSON.stringify(proc)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
