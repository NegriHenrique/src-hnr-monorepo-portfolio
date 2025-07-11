import { StrapiWork } from "../../../../../../types/strapi-content";
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
      <h3 className="text-4xl sm:text-5xl font-light mb-16 text-center text-black dark:text-white tracking-tight">
        {t("section_title")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-white dark:bg-zinc-950 rounded-2xl shadow-xl p-12 flex flex-col items-center gap-8 border border-zinc-100 dark:border-zinc-900 transition hover:scale-[1.01] hover:shadow-2xl duration-200 min-h-[420px]"
            style={{ boxShadow: "0 8px 32px 0 rgba(60,60,60,0.08)" }}
          >
            {work.image && (
              <img
                src={
                  typeof work.image === "string"
                    ? strapiImagePrefix + work.image
                    : strapiImagePrefix + work.image.url
                }
                alt={work.title}
                width={140}
                height={140}
                className="rounded-xl object-cover mb-6"
                style={{ boxShadow: "0 2px 16px 0 rgba(60,60,60,0.10)" }}
              />
            )}
            <h4 className="text-2xl font-light text-center text-black dark:text-white mb-2">
              {work.title}
            </h4>
            <p className="text-base text-zinc-600 dark:text-zinc-300 text-center mb-4">
              {work.description}
            </p>
            <div className="flex gap-4 mt-auto">
              <a
                href={typeof work.caseStudy === "string" ? work.caseStudy : ""}
                className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-light text-sm transition hover:bg-zinc-800 hover:dark:bg-zinc-200"
                rel="noopener noreferrer"
              >
                {t("case_study")}
              </a>
              <a
                href={work.link}
                className="px-6 py-2 rounded-full border border-black dark:border-white text-black dark:text-white font-light text-sm transition hover:bg-zinc-100 hover:dark:bg-zinc-800"
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
