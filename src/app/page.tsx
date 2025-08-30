// app/page.tsx
"use client";

import PageTransition from "@/components/page/PageTransition";
import { Information } from "@/components/common/home/Information";
import { ContactCard } from "@/components/common/contactCard/ContactCard";
import { Experience } from "@/components/common/home/Experience";

export default function Home() {
  return (
    <PageTransition>
      <div className={`px-10 sm:px-20 dark:bg-black`}>
        <Information />

        <Experience />

        <div
          className="flex flex-col md:flex-row justify-center gap-10 md:justify-around md:align-middle md:items-center 
                    max-h-screen"
        >
          <ContactCard />
        </div>
      </div>
    </PageTransition>
  );
}
