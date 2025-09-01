// components/common/ScrollReveal.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useIntersection } from "@/hooks/useIntersection";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  const { ref, isVisible } = useIntersection();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
