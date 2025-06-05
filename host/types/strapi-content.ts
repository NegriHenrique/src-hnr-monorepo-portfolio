export type StrapiImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type StrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
    [key: string]: StrapiImageFormat | undefined;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiLocalization = {
  id: number;
  locale: string;
};

export type StrapiHero = {
  id: number;
  documentId: string;
  name: string;
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  image?: StrapiImage;
  localizations?: StrapiLocalization[];
};
export type StrapiWork = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  link: string;
  tags: string;
  externalUrl: boolean;
  caseStudy: { type: string; children: { type: string; text: string }[] }[];
  order: number | null;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  image?: StrapiImage | null;
  localizations?: StrapiLocalization[];
};
export type StrapiService = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  icon?: string;
  order?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations?: StrapiLocalization[];
};
export type StrapiMedia = {
  id: number;
  documentId: string;
  type: "video" | "writing";
  title: string;
  url?: string;
  description?: string;
  order?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations?: StrapiLocalization[];
};
export type StrapiDescription = {
  id: number;
  documentId: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations?: StrapiLocalization[];
};
export type StrapiContact = {
  id: number;
  documentId: string;
  label: string;
  value: string;
  link: string;
  order?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations?: StrapiLocalization[];
};

export type StrapiClient = {
  id: number;
  documentId: string;
  name: string;
  logo: string | { url: string };
  link?: string;
  order?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations?: StrapiLocalization[];
};

export type StrapiContentTypes = {
  hero: StrapiHero;
  works: StrapiWork[];
  services: StrapiService[];
  medias: StrapiMedia[];
  description: StrapiDescription;
  contacts: StrapiContact[];
  clients: StrapiClient[];
};

export type StrapiContentResponseSingle<T> = {
  data: T;
  meta?: Record<string, unknown>;
};
export type StrapiContentResponseCollection<T> = {
  data: T[];
  meta?: Record<string, unknown>;
};
export enum StrapiContentType {
  HERO = "hero",
  WORKS = "works",
  SERVICES = "services",
  MEDIAS = "medias",
  DESCRIPTION = "description",
  CONTACTS = "contacts",
  CLIENTS = "clients", // Adicionado para suportar a collection de clientes
}

export type StrapiContentResponse<T extends StrapiContentType> = {
  data: {
    id: number;
  } & StrapiContentTypes[T];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
export type StrapiContentListResponse<T extends StrapiContentType> = {
  data: StrapiContentResponse<T>[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
export type StrapiContentQueryMap = {
  [K in StrapiContentType]: {
    list: string;
    single: string;
  };
}[StrapiContentType];
