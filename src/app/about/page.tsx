"use client";

import React from "react";

import PageTransition from "@/components/page/PageTransition";

import { AboutForm } from "@/feature/about-form";

export default function page() {
  return (
    <PageTransition>
      <AboutForm />
    </PageTransition>
  );
}
