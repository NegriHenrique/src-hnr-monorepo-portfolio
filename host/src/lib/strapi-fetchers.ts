import { getStrapiQueryMap, STRAPI_BASE_URL } from "./strapi-config";
import { StrapiContentType } from "../../types/strapi-content";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_STRAPI_URL;

export function fetchCollection(
  contentType: StrapiContentType,
  locale: string,
  populate: string[] = []
) {
  const populateParams = populate.map((p) => `populate[]=${p}`).join("&");
  return axios
    .get(`${API}/${contentType}?locale=${locale}&${populateParams}`)
    .then((res) => res.data);
}
export async function fetchSingleBySlug(
  contentType: StrapiContentType,
  slug: string,
  locale: string
) {
  const query = getStrapiQueryMap(locale)[contentType].single;
  const url = `${STRAPI_BASE_URL}/${contentType}?filters[slug][$eq]=${slug}${query}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch by slug");
  const json = await res.json();
  return { data: json.data?.[0] || null };
}
