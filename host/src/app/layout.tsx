import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../root-config";
import SingleSpaLoader from "./SingleSpaLoader";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henrique Negri | Product Designer & Frontend Engineer",
  description:
    "Sou apaixonado por criar produtos digitais que unem design, tecnologia e negócios. Atuo como Product Designer e Frontend Engineer, ajudando empresas a transformar ideias em experiências digitais de alto impacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/systemjs@6.14.2/dist/system.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/react.systemjs-shim.js" strategy="beforeInteractive" />
        <Script
          src="/react-dom.systemjs-shim.js"
          strategy="beforeInteractive"
        />
        <script type="systemjs-importmap">
          {`
            {
              "imports": {
                "geogrid": "http://localhost:3001/geogrid.js",
                "bg-remover": "http://localhost:3002/bgremover.js",
                "focus": "http://localhost:3003/focus.js",
                "react": "/react.systemjs-shim.js",
                "react-dom": "/react-dom.systemjs-shim.js",
                "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@6.0.0/lib/system/single-spa.min.js"
              }
            }
          `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SingleSpaLoader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
