import React from "react";
import "./aboutPage.css";

import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { RiGithubFill } from "react-icons/ri";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaFileLines } from "react-icons/fa6";

import { motion } from "framer-motion";

export default function ContactSide() {
  return (
    <motion.div
      key="front"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.33, 1, 0.68, 1],
        type: "tween",
      }}
      exit={{ y: 30, opacity: 0 }}
      className="inline-flex gap-7 sm:gap-15 items-center flex-col sm:flex-row 
                              border-t-1 shadow-xl/20 rounded-2xl dark:border-t-white dark:shadow-xl/20 dark:shadow-white
                              py-5 px-6 sm:px-10"
    >
      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-white">
        Let&apos;s connect
      </h3>
      <div className="flex flex-col gap-6">
        <div className="flex items-center">
          <IoMail className="h-5 w-5" />
          <div className="ml-4">
            <h4 className="text-base sm:text-[18px]">Email</h4>
            <a
              href="mailto:huyphantranthanh@gmail.com"
              className="text-sm sm:text-base text-gray-500"
            >
              huyphantranthanh@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <FaLocationDot className="h-5 w-5" />
          <div className="ml-4">
            <h4 className="text-base sm:text-[18px]">Location</h4>
            <p className="text-sm sm:text-base text-gray-500">
              Ho Chi Minh City, VietNam
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <IoShareSocialSharp className="h-5 w-5" />
          <div className="ml-4 flex gap-2">
            <a href="https://linkedin.com/in/huythanhphan" target="_blank">
              <AiFillLinkedin className="w-7 h-7 sm:h-8 sm:w-8" />
            </a>
            <a href="https://github.com/Alexspector123" target="_blank">
              <RiGithubFill className="w-7 h-7 sm:h-8 sm:w-8" />
            </a>
            <a
              href="https://drive.google.com/file/d/13_IaKtgAcEEPZFfnIFTw2S3evGFPYRRW/view?usp=drive_link"
              target="_blank"
              className="md:hidden"
            >
              <PiReadCvLogoFill className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="items-center hidden md:flex">
          <FaFileLines className="h-5 w-5" />
          <div className="ml-4 flex items-center">
            <h4 className="text-[18px]">My Resume </h4>
            <a
              href="https://drive.google.com/file/d/13_IaKtgAcEEPZFfnIFTw2S3evGFPYRRW/view?usp=drive_link"
              target="_blank"
            >
              <PiReadCvLogoFill className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
