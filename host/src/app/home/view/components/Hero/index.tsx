import { StrapiHero } from "../../../../../../types/strapi-content";
import { useTranslation } from "react-i18next";
import { Title } from "shared-ui";

export type HeroProps = Pick<StrapiHero, "name" | "title" | "subtitle"> & {
  image: string | null;
};

export function Hero({ name, title, subtitle, image }: HeroProps) {
  const { t } = useTranslation("hero");
  return (
    <section className="bg-red flex flex-col items-center justify-center min-h-[70vh] py-32 gap-8 text-center bg-white dark:bg-black border-b border-zinc-100 dark:border-zinc-900">
      <img
        src={image ?? "/default-avatar.png"}
        alt={name}
        width={180}
        height={180}
        className="rounded-full border-4 border-zinc-200 dark:border-zinc-800 shadow-2xl mb-8 object-cover transition-transform duration-300 hover:scale-105"
        style={{ boxShadow: "0 8px 32px 0 rgba(60,60,60,0.10)" }}
      />
      <Title variant="presetH1">{name || t("greeting")}</Title>
      <h2 className="text-2xl sm:text-3xl font-light text-zinc-700 dark:text-zinc-300 mb-2">
        {title || t("role")}
      </h2>
      <p className="max-w-2xl text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 mb-4">
        {subtitle || t("cta")}
      </p>
    </section>
  );
}
