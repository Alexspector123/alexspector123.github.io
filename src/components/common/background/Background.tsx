"use client";

import { useTheme } from "next-themes";
import DarkBackground from "@/components/common/background/DarkBackground";
import LightBackground from "@/components/common/background/LightBackground";
import { useEffect, useState } from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen w-full bg-[#fefcff]">{children}</div>;
  }

  const SelectedBackground =
    resolvedTheme === "light" ? LightBackground : DarkBackground;
  return <SelectedBackground>{children}</SelectedBackground>;
}
