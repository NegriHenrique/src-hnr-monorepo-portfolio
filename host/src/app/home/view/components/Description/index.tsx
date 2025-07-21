import { StrapiDescription } from "../../../../../../types/strapi-content";
import { useTranslation } from "react-i18next";

export type DescriptionProps = Pick<StrapiDescription, "text">;

export function Description({ text }: DescriptionProps) {
  const { t } = useTranslation("description");
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto w-full text-center">
      <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
        {text ? text : t("about")}
      </p>
    </section>
  );
}
