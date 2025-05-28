"use client";
import { SessionProvider } from "next-auth/react";
import { Home } from "./home";

export default function Page() {
  return (
    <SessionProvider session={null}>
      <Home />
    </SessionProvider>
  );
}
