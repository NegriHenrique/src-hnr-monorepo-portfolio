import {
  StrapiContentQueryMap,
  StrapiContentType,
} from "../../types/strapi-content";

export const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export function getStrapiQueryMap(
  locale: string
): Record<StrapiContentType, StrapiContentQueryMap> {
  return {
    [StrapiContentType.HERO]: {
      list: `?locale=${locale}&populate=*`,
      single: `?locale=${locale}&populate=*`,
    },
    [StrapiContentType.WORKS]: {
      list: `?locale=${locale}&populate=*&sort[0]=order:asc&sort[1]=id:desc`,
      single: `?locale=${locale}&populate=*`,
    },
    [StrapiContentType.SERVICES]: {
      list: `?locale=${locale}&populate=*&sort[0]=order:asc&sort[1]=id:desc`,
      single: `?locale=${locale}&populate=*`,
    },
    [StrapiContentType.MEDIAS]: {
      list: `?locale=${locale}&populate=*&sort[0]=order:asc&sort[1]=id:desc`,
      single: `?locale=${locale}&populate=*`,
    },
    [StrapiContentType.DESCRIPTION]: {
      list: `?locale=${locale}&populate=*`,
      single: `?locale=${locale}&populate=*`,
    },
    [StrapiContentType.CONTACTS]: {
      list: `?locale=${locale}&populate=*&sort[0]=order:asc&sort[1]=id:desc`,
      single: `?locale=${locale}&populate=*`,
    },
    [StrapiContentType.CLIENTS]: {
      list: `?locale=${locale}&populate=*&sort[0]=order:asc&sort[1]=id:desc`,
      single: `?locale=${locale}&populate=*`,
    },
  };
}
