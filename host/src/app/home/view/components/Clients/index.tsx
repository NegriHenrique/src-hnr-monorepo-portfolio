import React from "react";
import { StrapiClient } from "../../../../../../types/strapi-content";
import { useTranslation } from "react-i18next";

export type Client = StrapiClient;

export type ClientsProps = {
  clients: Client[];
};

const strapiImagePrefix = process.env.NEXT_PUBLIC_STRAPI_IMAGE_PREFIX || "";

export function Clients({ clients }: ClientsProps) {
  const { t } = useTranslation("clients");
  if (!clients || clients.length === 0) return null;
  return (
    <section id="clients" className="py-20 px-4 max-w-6xl mx-auto w-full">
      <h3 className="text-3xl sm:text-4xl font-bold mb-14 text-center text-black dark:text-white tracking-tight">
        {t("section_title")}
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {clients.map((client) => (
          <a
            key={client.id}
            href={client.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            style={{ minWidth: 120 }}
          >
            {client.logo && (
              <img
                src={
                  typeof client.logo === "string"
                    ? strapiImagePrefix + client.logo
                    : strapiImagePrefix + (client.logo as { url: string }).url
                }
                alt={client.name}
                width={120}
                height={60}
                className="object-contain mb-2 grayscale group-hover:grayscale-0 transition"
              />
            )}
            <span className="text-sm text-zinc-700 dark:text-zinc-300 text-center mt-1">
              {client.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
