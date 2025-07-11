import { extractArray } from "@/utils/extractArray";
import { useStrapiCollections } from "../../../../hooks/useStrapi";
import {
  StrapiContentType,
  StrapiHero,
  StrapiWork,
  StrapiService,
  StrapiMedia,
  StrapiContact,
  StrapiClient,
  StrapiAbout,
} from "../../../../types/strapi-content";
import { useTranslation } from "react-i18next";

export interface HomeData {
  hero?: StrapiHero;
  works: StrapiWork[];
  services: StrapiService[];
  medias: StrapiMedia[];
  contacts: StrapiContact[];
  clients: StrapiClient[];
  about?: StrapiAbout;
  isLoading: boolean;
  strapiImagePrefix: string;
}

export function useHomeController(): HomeData {
  const { i18n } = useTranslation();
  const locale = i18n.language === "en" ? "en" : "pt-BR";

  const populates: Record<StrapiContentType, string[]> = {
    [StrapiContentType.HERO]: ["image"],
    [StrapiContentType.WORKS]: [
      "image",
      "tags",
      "clients.logo",
      "media",
      "case_study.heroImage",
    ],
    [StrapiContentType.SERVICES]: ["icon"],
    [StrapiContentType.MEDIAS]: [],
    [StrapiContentType.CONTACTS]: [],
    [StrapiContentType.CLIENTS]: ["logo"],
    [StrapiContentType.ABOUT]: ["processes"],
    [StrapiContentType.DESCRIPTION]: [],
  };

  const [heroQ, worksQ, servicesQ, mediasQ, contactsQ, clientsQ, aboutQ] =
    useStrapiCollections(
      [
        StrapiContentType.HERO,
        StrapiContentType.WORKS,
        StrapiContentType.SERVICES,
        StrapiContentType.MEDIAS,
        StrapiContentType.CONTACTS,
        StrapiContentType.CLIENTS,
        StrapiContentType.ABOUT,
      ],
      locale,
      populates
    );

  const isLoading =
    heroQ.isLoading ||
    worksQ.isLoading ||
    servicesQ.isLoading ||
    mediasQ.isLoading ||
    contactsQ.isLoading ||
    clientsQ.isLoading ||
    aboutQ.isLoading;

  const strapiImagePrefix = process.env.NEXT_PUBLIC_STRAPI_IMAGE_PREFIX || "";

  return {
    hero: heroQ.data?.data as StrapiHero | undefined,
    works: extractArray<StrapiWork>(worksQ.data?.data),
    services: extractArray<StrapiService>(servicesQ.data?.data),
    medias: extractArray<StrapiMedia>(mediasQ.data?.data),
    contacts: extractArray<StrapiContact>(contactsQ.data?.data),
    clients: extractArray<StrapiClient>(clientsQ.data?.data),
    about: aboutQ.data?.data as StrapiAbout | undefined,
    isLoading,
    strapiImagePrefix,
  };
}
