import { StrapiHero } from "../../../../types/strapi-content";
import { useTranslation } from "react-i18next";
import { Title } from "shared-ui";

export type HeroProps = Pick<StrapiHero, "name" | "title" | "subtitle"> & {
  image: string | null;
};

export function Hero({ name, title, subtitle, image }: HeroProps) {
  const { t } = useTranslation("hero");
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-24 gap-6 text-center bg-white dark:bg-black">
      <img
        src={image ?? "/default-avatar.png"}
        alt={name}
        width={160}
        height={160}
        className="rounded-full border-2 border-black/10 dark:border-white/10 shadow-xl mb-6 object-cover"
      />
      <Title variant="presetH1">asdas das{name || t("greeting")}</Title>
      <h2 className="text-2xl sm:text-3xl font-medium text-zinc-700 dark:text-zinc-300 mb-2">
        {title || t("role")}
      </h2>
      <p className="max-w-2xl text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 mb-4">
        {subtitle || t("cta")}
      </p>
    </section>
  );
}
