"use client";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Works } from "./components/Works";
import { Services } from "./components/Services";
import { Media } from "./components/Media";
import { Description } from "./components/Description";
import { Contacts } from "./components/Contacts";
import { useStrapiCollections } from "../../hooks/useStrapi";
import {
  StrapiContentType,
  StrapiHero,
  StrapiWork,
  StrapiService,
  StrapiMedia,
  StrapiDescription,
  StrapiContact,
} from "../../types/strapi-content";
import { extractArray } from "@/utils/extractArray";

const featureFlags = {
  showHero: true,
  showWorks: true,
  showServices: true,
  showMedia: true,
  showDescription: true,
  showContacts: true,
};

export function Home() {
  const contentTypes: StrapiContentType[] = [
    StrapiContentType.HERO,
    StrapiContentType.WORKS,
    StrapiContentType.SERVICES,
    StrapiContentType.MEDIAS,
    StrapiContentType.DESCRIPTION,
    StrapiContentType.CONTACTS,
  ];

  const [
    heroQuery,
    worksQuery,
    servicesQuery,
    mediasQuery,
    descriptionQuery,
    contactsQuery,
  ] = useStrapiCollections(contentTypes);

  if (
    heroQuery.isLoading ||
    worksQuery.isLoading ||
    servicesQuery.isLoading ||
    mediasQuery.isLoading ||
    descriptionQuery.isLoading ||
    contactsQuery.isLoading
  ) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const works = extractArray<StrapiWork>(worksQuery.data?.data);
  const services = extractArray<StrapiService>(servicesQuery.data?.data);
  const medias = extractArray<StrapiMedia>(mediasQuery.data?.data);
  const contacts = extractArray<StrapiContact>(contactsQuery.data?.data);
  const hero = heroQuery.data?.data as StrapiHero | undefined;
  const description = descriptionQuery.data?.data as
    | StrapiDescription
    | undefined;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {featureFlags.showHero && hero && (
        <Hero
          name={hero.name}
          title={hero.title}
          subtitle={hero.subtitle}
          image={
            Array.isArray(hero.image)
              ? hero.image[0]?.url || ""
              : hero.image?.url || ""
          }
        />
      )}
      {featureFlags.showDescription && description && (
        <Description text={description.text} />
      )}
      {featureFlags.showWorks && works.length > 0 && (
        <Works
          works={works
            .map((w) => ({
              ...w,
              image: w.image?.url || "",
              caseStudy: Array.isArray(w.caseStudy)
                ? JSON.stringify(w.caseStudy)
                : w.caseStudy,
            }))
            .sort((a, b) => (a.order || 0) - (b.order || 0))}
        />
      )}
      {featureFlags.showServices && services.length > 0 && (
        <Services services={services} />
      )}
      {featureFlags.showMedia && medias.length > 0 && (
        <Media
          videos={medias
            .filter((m) => m.type === "video")
            .map((m) => ({ ...m, url: m.url || "" }))}
          writings={medias
            .filter((m) => m.type === "writing")
            .map((m) => ({ ...m, url: m.url || "" }))}
        />
      )}
      {featureFlags.showContacts && contacts.length > 0 && (
        <Contacts contacts={contacts} />
      )}
      <Footer />
    </div>
  );
}
