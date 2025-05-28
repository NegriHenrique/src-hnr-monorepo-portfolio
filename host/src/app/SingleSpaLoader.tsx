"use client";
import { useEffect } from "react";

export default function SingleSpaLoader() {
  useEffect(() => {
    import("../root-config");
  }, []);
  return null;
}
