import React from "react";

import { AiFillLinkedin } from "react-icons/ai";
import { RiGithubFill } from "react-icons/ri";
import { PiReadCvLogoFill } from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black ">
      <div
        className="w-full mx-auto 
                            px-10 pt-5 pb-5 md:px-20
                            md:pt-12
                            flex flex-col items-center gap-1 sm:gap-4 md:flex-row md:items-center md:justify-between"
      >
        <span
          className="text-sm text-gray-500 sm:text-center dark:text-gray-400
                                "
        >
          Copyright &copy; 2025&nbsp;Hitori
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <a href="https://linkedin.com/in/huythanhphan" target="_blank">
            <AiFillLinkedin
              className="h-8 w-8 me-4 md:me-6 
                                                   transform duration-300 hover:-translate-y-2"
            />
          </a>
          <a href="https://github.com/Alexspector123" target="_blank">
            <RiGithubFill
              className="h-8 w-8 me-4 md:me-6 
                                                 transform duration-300 hover:-translate-y-2"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1RmGP0RPj3-I1Hwwm-hpodUhQtb7Je8q5/view?usp=sharing"
            target="_blank"
          >
            <PiReadCvLogoFill
              className="h-8 w-8 me-4 md:me-6 
                                                      transform duration-300 hover:-translate-y-2"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
