import { StrapiContentListResponse } from "./../types/strapi-content";
import { useQueries, useQuery, UseQueryResult } from "@tanstack/react-query";
import { StrapiContentType } from "../types/strapi-content";
import { fetchCollection, fetchSingleBySlug } from "@/lib/strapi-fetchers";

export function useStrapiCollections<T extends StrapiContentType[]>(
  contentTypes: T,
  locale: string
): {
  [K in keyof T]: UseQueryResult<StrapiContentListResponse<T[K]>, Error>;
} {
  const results = useQueries({
    queries: contentTypes.map((type) => ({
      queryKey: [type, locale],
      queryFn: () => fetchCollection(type, locale),
    })),
  });

  return results as {
    [K in keyof T]: UseQueryResult<StrapiContentListResponse<T[K]>, Error>;
  };
}

export function useStrapiCollection(
  contentType: StrapiContentType,
  locale: string
) {
  return useQuery({
    queryKey: [contentType, locale],
    queryFn: () => fetchCollection(contentType, locale),
  });
}

export function useStrapiSingle(
  contentType: StrapiContentType,
  slug: string,
  locale: string,
  enabled = true
) {
  return useQuery({
    queryKey: [contentType, slug, locale],
    queryFn: () => fetchSingleBySlug(contentType, slug, locale),
    enabled,
  });
}
