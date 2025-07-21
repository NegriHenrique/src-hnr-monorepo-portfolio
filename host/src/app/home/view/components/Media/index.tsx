import { StrapiMedia } from "../../../../../../types/strapi-content";
import { useTranslation } from "react-i18next";

export type MediaItem = {
  type: "video" | "writing";
  title: string;
  url: string;
};

export type MediaProps = {
  medias: Pick<StrapiMedia, "id" | "type" | "title" | "url">[];
};

export function Media({ medias }: MediaProps) {
  const { t } = useTranslation("media");
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto w-full">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        {t("section_title")}
      </h3>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="flex-1">
          <ul className="space-y-2">
            {medias.map((media) => (
              <li key={media.title}>
                <a
                  href={media.url}
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {media.title}
                </a>
                <p>{t(media.type)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
