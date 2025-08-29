"use client";

import React from "react";

import PageTransition from "@/components/page/PageTransition";

import { ExperienceForm } from "@/feature/exp-form";

export default function page() {
  return (
    <PageTransition>
      <ExperienceForm />
    </PageTransition>
  );
}
