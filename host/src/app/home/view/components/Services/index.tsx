import { useTranslation } from "react-i18next";
import { StrapiService } from "../../../../../../types/strapi-content";

export type Service = Pick<
  StrapiService,
  "title" | "icon" | "description" | "order"
>;

export type ServicesProps = {
  services: Service[];
};

export function Services({ services }: ServicesProps) {
  console.log("Services component rendered with services:", services);
  const { t } = useTranslation("services");
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto w-full">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
        {t("section_title")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col items-center gap-3 border border-gray-100 dark:border-zinc-800"
          >
            <span className="text-4xl mb-2">{service.icon?.name}</span>
            <h4 className="text-lg font-bold text-center">{service.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
