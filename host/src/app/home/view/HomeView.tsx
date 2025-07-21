import { HomeData } from "../controller/useHomeController";
import {
  About,
  Clients,
  Contacts,
  Footer,
  Hero,
  Media,
  Services,
  Works,
} from "./components";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const featureFlags = {
  showHero: true,
  showAbout: true,
  showWorks: true,
  showServices: true,
  showMedia: true,
  showDescription: true,
  showContacts: true,
};

export function HomeView({
  hero,
  works,
  services,
  medias,
  contacts,
  clients,
  about,
  isLoading,
  strapiImagePrefix,
}: HomeData) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "reuniao-de-1-hora" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {featureFlags.showHero && hero && (
        <Hero
          name={hero.name}
          title={hero.title}
          subtitle={hero.subtitle}
          image={strapiImagePrefix + hero.image?.url}
        />
      )}
      {featureFlags.showAbout && about && (
        <About
          headline={about.headline}
          introText={about.introText}
          processes={about.processes}
        />
      )}
      {featureFlags.showWorks && works.length > 0 && <Works works={works} />}
      {clients.length > 0 && <Clients clients={clients} />}
      {featureFlags.showServices && services.length > 0 && (
        <Services services={services} />
      )}
      {featureFlags.showMedia && medias.length > 0 && <Media medias={medias} />}
      {featureFlags.showContacts && contacts.length > 0 && (
        <Contacts contacts={contacts} />
      )}
      <Cal
        namespace="reuniao-de-1-hora"
        calLink="henrique-negri/reuniao-de-1-hora"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
      <Footer />
    </div>
  );
}
