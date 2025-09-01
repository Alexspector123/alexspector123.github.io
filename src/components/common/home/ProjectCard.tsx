import React from "react";

import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";

interface ProjectCardProps {
  title: string;
  desc: string;
  imageUrl: string;
  link: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, desc, imageUrl, link } = props;

  return (
    <div
      className="w-72 
              bg-gray-300 
                flex flex-col items-start justify-center 
                rounded-md border-2 border-gray-800 
                transition-all duration-300 
                hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[6px_6px_0px_0px_rgba(50,50,50,1)]"
    >
      <div className="flex flex-col">
        <div className="relative w-full h-[200px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-fill object-top rounded-md transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="flex flex-col items-center justify-between gap-5">
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="break-words">{desc}</p>
          </div>
          <div className="flex justify-end">
            <a
              href={`https://github.com/${link}`}
              target="_blank"
              className="flex gap-1 justify-center items-center 
                            mt-12 
                            w-24 h-10 
                            rounded-md border-2 border-gray-800 
                            bg-white 
                            shadow-[4px_4px_0px_0px_rgba(50,50,50,1)] 
                            text-[17px] font-semibold text-gray-800 cursor-pointer 
                            active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
            >
              <IoLogoGithub size={24} /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
