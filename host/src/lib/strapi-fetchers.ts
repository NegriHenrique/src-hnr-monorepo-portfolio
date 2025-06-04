import { strapiQueryMap, STRAPI_BASE_URL } from "./strapi-config";
import { StrapiContentType } from "../../types/strapi-content";

export async function fetchCollection(contentType: StrapiContentType) {
  const query = strapiQueryMap[contentType].list;
  const res = await fetch(`${STRAPI_BASE_URL}/${contentType}${query}`);
  if (!res.ok) throw new Error("Failed to fetch collection");
  return res.json();
}

export async function fetchSingleBySlug(
  contentType: StrapiContentType,
  slug: string
) {
  const query = strapiQueryMap[contentType].single;
  const url = `${STRAPI_BASE_URL}/${contentType}?filters[slug][$eq]=${slug}${query}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch by slug");
  const json = await res.json();
  return { data: json.data?.[0] || null };
}
