"use client";

import React from "react";

import { ProjectCard } from "@/components/common/project/ProjectCard";

import { motion } from "framer-motion";
import { projectList } from "@/constants/project.constant";

export default function ProjectForm() {
  return (
    <div
      className="min-h-[100svh] p-10 pb-15 sm:p-20 sm:pb-0
                    font-mono"
    >
      <div
        className="max-w-[1440px]
                      mx-auto 
                      flex flex-col"
      >
        <main
          className="flex-grow 
                          sm:p-8"
        >
          <div
            className="max-w-4xl 
                          mx-auto"
          >
            <h2
              className="text-2xl font-medium text-gray-800 dark:text-white
                            pb-2 
                            border-b border-gray-200
                            max-w-48"
            >
              Projects
            </h2>
            <div
              className="mt-12
                            space-y-16"
            >
              {projectList.map((project, index) => (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.33, 1, 0.68, 1],
                    type: "tween",
                  }}
                  key={index}
                  className="group"
                >
                  <ProjectCard
                    title={project.title}
                    date={project.date}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    link={project.link}
                    type={project.type}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div
            className="relative
                            mt-10
                            flex justify-end h-8"
          >
            <a
              href="/experience"
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
        </main>
      </div>
    </div>
  );
}
