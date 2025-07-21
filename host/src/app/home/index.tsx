"use client";
import { HomeView } from "./view/HomeView";
import { useHomeController } from "./controller/useHomeController";

export default function Home() {
  const homeData = useHomeController();
  return <HomeView {...homeData} />;
}
