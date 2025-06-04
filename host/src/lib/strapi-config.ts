import {
  StrapiContentQueryMap,
  StrapiContentType,
} from "../../types/strapi-content";

export const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const strapiQueryMap: Record<StrapiContentType, StrapiContentQueryMap> =
  {
    [StrapiContentType.HERO]: {
      list: "?populate=*",
      single: "?populate=*",
    },
    [StrapiContentType.WORKS]: {
      list: "?populate=*",
      single: "?populate=*",
    },
    [StrapiContentType.SERVICES]: {
      list: "?populate=*",
      single: "?populate=*",
    },
    [StrapiContentType.MEDIAS]: {
      list: "?populate=*",
      single: "?populate=*",
    },
    [StrapiContentType.DESCRIPTION]: {
      list: "?populate=*",
      single: "?populate=*",
    },
    [StrapiContentType.CONTACTS]: {
      list: "?populate=*",
      single: "?populate=*",
    },
  };
