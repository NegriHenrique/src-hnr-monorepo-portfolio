"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/i18n";
import { Home } from "./home";

export default function Page() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={null}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}
