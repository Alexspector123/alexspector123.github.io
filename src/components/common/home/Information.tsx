"use client";

import { motion } from "framer-motion";

export function Information() {
  return (
    <div
      className="flex flex-col md:flex-row justify-center gap-10 md:justify-around md:align-middle md:items-center 
                  h-screen"
    >
      <div
        className="block md:hidden
                        md:self-center"
      >
        <motion.img
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: [0.33, 1, 0.68, 1],
            type: "tween",
          }}
          src="avt2.jpg"
          alt=""
          className="max-w-60 max-h-60 sm:max-w-70 sm:max-h-70 
                            object-cover border-3 dark:border-white rounded-md"
        />
      </div>
      <div
        className="
                        max-w-xl lg:p-30"
      >
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
          <h1
            className="text-4xl font-mono
                        border-b border-gray-300 
                        pb-1 
                        inline-block 
                        mb-4"
          >
            Huy Phan
          </h1>
          <p
            className="text-gray-500 text-2xl font-mono
                        whitespace-pre-line leading-relaxed"
          >
            An innovative{"\n"}software developer
          </p>
        </motion.div>
        <a
          href="/projects"
          className="mt-6 inline-block transition
                     text-sm font-mono text-gray-600 hover:text-black dark:text-white dark:hover:text-gray-300
                     transform hover:translate-x-2
                     duration-300"
        >
          Go through →
        </a>
      </div>
      <div className="hidden md:block self-center">
        <motion.img
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: [0.33, 1, 0.68, 1],
            type: "tween",
          }}
          src="avt2.jpg"
          alt=""
          className="max-w-75 max-h-75 xl:max-h-[2048px] xl:max-w-[2048px] 
                            object-cover border-3 dark:border-white rounded-md"
        />
      </div>
    </div>
  );
}
