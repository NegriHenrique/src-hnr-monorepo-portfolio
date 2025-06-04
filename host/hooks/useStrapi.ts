import { StrapiContentListResponse } from "./../types/strapi-content";
import { useQueries, useQuery, UseQueryResult } from "@tanstack/react-query";
import { StrapiContentType } from "../types/strapi-content";
import { fetchCollection, fetchSingleBySlug } from "@/lib/strapi-fetchers";

export function useStrapiCollections<T extends StrapiContentType[]>(
  contentTypes: T
): {
  [K in keyof T]: UseQueryResult<StrapiContentListResponse<T[K]>, Error>;
} {
  const results = useQueries({
    queries: contentTypes.map((type) => ({
      queryKey: [type],
      queryFn: () => fetchCollection(type),
    })),
  });

  return results as {
    [K in keyof T]: UseQueryResult<StrapiContentListResponse<T[K]>, Error>;
  };
}

export function useStrapiCollection(contentType: StrapiContentType) {
  return useQuery({
    queryKey: [contentType],
    queryFn: () => fetchCollection(contentType),
  });
}

export function useStrapiSingle(
  contentType: StrapiContentType,
  slug: string,
  enabled = true
) {
  return useQuery({
    queryKey: [contentType, slug],
    queryFn: () => fetchSingleBySlug(contentType, slug),
    enabled,
  });
}
