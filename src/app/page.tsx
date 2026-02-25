// app/page.tsx
"use client";

import PageTransition from "@/components/page/PageTransition";
import { Information } from "@/components/common/home/Information";
import ContactSide from "@/components/common/contactCard/ContactSide";
import { Tech } from "@/components/common/home/Tech";
import { Timeline } from "@/components/common/home/Timeline";
import { Project } from "@/components/common/home/Project";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Home() {
  return (
    <PageTransition>
      <div className="px-10 sm:px-20 ">
        <ScrollReveal>
          <Information />
        </ScrollReveal>

        <ScrollReveal>
          <Tech />
        </ScrollReveal>

        <ScrollReveal>
          <Timeline />
        </ScrollReveal>

        <ScrollReveal>
          <Project />
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-center gap-10 md:justify-around md:align-middle md:items-center h-screen">
            <ContactSide />
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
