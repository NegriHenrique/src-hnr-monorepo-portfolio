/** @type {import('next').NextConfig} */
const remotePatterns = [];

if (process.env.NEXT_PUBLIC_STRAPI_IMAGE_PREFIX) {
  const url = new URL(process.env.NEXT_PUBLIC_STRAPI_IMAGE_PREFIX);
  const protocol = url.protocol === "http:" ? "http" : "https";
  remotePatterns.push({
    protocol,
    hostname: url.hostname,
    port: url.port || undefined,
    pathname: "/:path*",
  });
}

if (process.env.NODE_ENV === "development") {
  // Pattern específico para localhost:1337/uploads
  remotePatterns.push({
    protocol: "http",
    hostname: "localhost",
    port: "1337",
    pathname: "/uploads/:path*",
  });
  // Pattern genérico para localhost em qualquer porta e caminho
  remotePatterns.push({
    protocol: "http",
    hostname: "localhost",
    pathname: "/uploads/:path*",
  });
  remotePatterns.push({
    protocol: "http",
    hostname: "localhost",
    pathname: "/:path*",
  });
}

module.exports = {
  images: {
    remotePatterns,
  },
  webpack(config) {
    return config;
  },
};
