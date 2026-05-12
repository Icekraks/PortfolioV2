"use client";

import { createContext, useContext } from "react";
import type { RootData } from "@/types/global";

const RootContext = createContext<RootData | null>(null);

export function RootProvider({
  data,
  children,
}: {
  data: RootData;
  children: React.ReactNode;
}) {
  return <RootContext.Provider value={data}>{children}</RootContext.Provider>;
}

export function useRoot(): RootData {
  const ctx = useContext(RootContext);
  if (!ctx) throw new Error("useRoot must be used within RootProvider");
  return ctx;
}
