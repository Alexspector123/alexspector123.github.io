"use client";

import { useTheme } from "next-themes";

import ClickSpark from "@/components/common/ClickSpark";

export default function ClickLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  return (
    <ClickSpark
      sparkColor={resolvedTheme === "light" ? "#000" : "#fff"}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  );
}
