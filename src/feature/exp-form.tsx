"use client";

import React from "react";

import { ProgressBar } from "@/components/common/skill/ProgressBar";
import { experienceList } from "@/constants/experience.constant";

import { motion } from "framer-motion";

export function ExperienceForm() {
  return (
    <div
      className="p-10 pb-15 sm:p-20 md:pb-0
                    font-mono
                    "
    >
      <div
        className="max-w-[1440px]
                            pt-18 xl:p-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15">
          {/* Education */}
          <div className="flex flex-col lg:min-h-40">
            <h2
              className="text-2xl font-medium text-gray-800 dark:text-white
                            pb-1
                            border-b border-gray-200
                            max-w-48
                            mb-3"
            >
              Education
            </h2>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.33, 1, 0.68, 1],
                type: "tween",
              }}
            >
              <p className="text-xl dark:text-white">Computer Science</p>
              <p className="text-base text-gray-600 dark:text-white">
                International University (2022 - Present)
              </p>
            </motion.div>
            <div className="flex-grow"></div>
          </div>
          {/* Experience */}
          <div></div>
          {/* Language */}
          <div className="">
            <h2
              className="text-2xl font-medium text-gray-800 dark:text-white
                            pb-1
                            border-b border-gray-200
                            max-w-48
                            mb-3"
            >
              Language
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] 2xl:xl:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
              {experienceList
                .filter((exp) => exp.type === "language")
                .map((exp, index) => (
                  <ProgressBar
                    key={index}
                    name={exp.name}
                    progress={exp.progress}
                  />
                ))}
            </div>
          </div>
          {/* Tools & Framework */}
          <div className="lg:min-h-40">
            <h2
              className="text-2xl font-medium text-gray-800 dark:text-white
                            pb-1
                            border-b border-gray-200
                            max-w-70
                            mb-3"
            >
              Tools & Framework
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] 2xl:xl:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
              {experienceList
                .filter(
                  (exp) => exp.type === "framework" || exp.type === "tool"
                )
                .map((exp, index) => (
                  <ProgressBar
                    key={index}
                    name={exp.name}
                    progress={exp.progress}
                  />
                ))}
            </div>
          </div>
        </div>

        <div
          className="relative
                            mt-5
                            flex justify-end"
        >
          <a
            href="/about"
            className="absolute right-0
                                flex items-center
                                text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white
                                hover:-right-3
                                cursor-pointer
                                !rounded-button
                                duration-300"
          >
            Next &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
