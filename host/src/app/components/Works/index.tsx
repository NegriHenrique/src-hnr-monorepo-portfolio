import { StrapiWork } from "../../../../types/strapi-content";
import { useTranslation } from "react-i18next";

export type Work = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  caseStudy: string;
};

export type WorksProps = {
  works: Pick<
    StrapiWork,
    "id" | "title" | "description" | "image" | "link" | "caseStudy" | "order"
  >[];
};

const strapiImagePrefix = process.env.NEXT_PUBLIC_STRAPI_IMAGE_PREFIX || "";

export function Works({ works }: WorksProps) {
  const { t } = useTranslation("works");
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto w-full">
      <h3 className="text-3xl sm:text-4xl font-bold mb-14 text-center text-black dark:text-white tracking-tight">
        {t("section_title")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl shadow-lg p-8 flex flex-col items-center gap-6 border border-zinc-200 dark:border-zinc-800 transition hover:scale-[1.02] hover:shadow-2xl duration-200"
          >
            {work.image && (
              <img
                src={
                  typeof work.image === "string"
                    ? strapiImagePrefix + work.image
                    : strapiImagePrefix + work.image.url
                }
                alt={work.title}
                width={120}
                height={120}
                className="rounded-xl object-cover mb-4 dark:invert"
              />
            )}
            <h4 className="text-2xl font-bold text-center text-black dark:text-white mb-2">
              {work.title}
            </h4>
            <p className="text-base text-zinc-600 dark:text-zinc-300 text-center mb-4">
              {work.description}
            </p>
            <div className="flex gap-4 mt-auto">
              <a
                href={typeof work.caseStudy === "string" ? work.caseStudy : ""}
                className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-sm transition hover:bg-zinc-800 hover:dark:bg-zinc-200"
                rel="noopener noreferrer"
              >
                {t("case_study")}
              </a>
              <a
                href={work.link}
                className="px-5 py-2 rounded-full border border-black dark:border-white text-black dark:text-white font-semibold text-sm transition hover:bg-zinc-100 hover:dark:bg-zinc-800"
                rel="noopener noreferrer"
              >
                {t("see_online")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
