"use client";

import { useTheme } from "next-themes";
import DarkBackground from "@/components/common/background/DarkBackground";
import LightBackground from "@/components/common/background/LightBackground";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  const SelectedBackground =
    resolvedTheme === "light" ? LightBackground : DarkBackground;

  return <SelectedBackground>{children}</SelectedBackground>;
}
