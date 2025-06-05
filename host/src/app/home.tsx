"use client";
import { useStrapiCollections } from "../../hooks/useStrapi";
import {
  StrapiContentType,
  StrapiHero,
  StrapiWork,
  StrapiService,
  StrapiMedia,
  StrapiDescription,
  StrapiContact,
  StrapiClient,
} from "../../types/strapi-content";
import { extractArray } from "@/utils/extractArray";
import {
  Contacts,
  Description,
  Footer,
  Hero,
  Media,
  Services,
  Works,
  Clients,
} from "./components";
import { useTranslation } from "react-i18next";

const featureFlags = {
  showHero: true,
  showWorks: true,
  showServices: true,
  showMedia: true,
  showDescription: true,
  showContacts: true,
};

export function Home() {
  const { i18n } = useTranslation();
  const locale = i18n.language === "en" ? "en" : "pt-BR";

  const contentTypes: StrapiContentType[] = [
    StrapiContentType.HERO,
    StrapiContentType.WORKS,
    StrapiContentType.SERVICES,
    StrapiContentType.MEDIAS,
    StrapiContentType.DESCRIPTION,
    StrapiContentType.CONTACTS,
    StrapiContentType.CLIENTS,
  ];

  const [
    heroQuery,
    worksQuery,
    servicesQuery,
    mediasQuery,
    descriptionQuery,
    contactsQuery,
    clientsQuery,
  ] = useStrapiCollections(contentTypes, locale);

  if (
    heroQuery.isLoading ||
    worksQuery.isLoading ||
    servicesQuery.isLoading ||
    mediasQuery.isLoading ||
    descriptionQuery.isLoading ||
    contactsQuery.isLoading ||
    clientsQuery.isLoading
  ) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const strapiImagePrefix = process.env.NEXT_PUBLIC_STRAPI_IMAGE_PREFIX || "";

  const works = extractArray<StrapiWork>(worksQuery.data?.data);
  const services = extractArray<StrapiService>(servicesQuery.data?.data);
  const medias = extractArray<StrapiMedia>(mediasQuery.data?.data);
  const contacts = extractArray<StrapiContact>(contactsQuery.data?.data);
  const hero = heroQuery.data?.data as StrapiHero | undefined;
  const description = descriptionQuery.data?.data as
    | StrapiDescription
    | undefined;
  const clients = extractArray<StrapiClient>(clientsQuery.data?.data);

  const changeLanguage = () => {
    // Implement language change logic here
    i18n.changeLanguage("en");

    console.log("Change language function called");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      <button onClick={changeLanguage}>mudar linguagem</button>
      {featureFlags.showHero && hero && (
        <Hero
          name={hero.name}
          title={hero.title}
          subtitle={hero.subtitle}
          image={
            Array.isArray(hero.image)
              ? strapiImagePrefix + hero.image[0]?.url || ""
              : strapiImagePrefix + hero.image?.url || ""
          }
        />
      )}
      {featureFlags.showDescription && description && (
        <Description text={description.text} />
      )}
      {featureFlags.showWorks && works.length > 0 && <Works works={works} />}
      {clients.length > 0 && <Clients clients={clients} />}
      {featureFlags.showServices && services.length > 0 && (
        <Services services={services} />
      )}
      {featureFlags.showMedia && medias.length > 0 && <Media medias={medias} />}
      {featureFlags.showContacts && contacts.length > 0 && (
        <Contacts contacts={contacts} />
      )}
      <Footer />
    </div>
  );
}
