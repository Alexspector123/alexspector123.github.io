import React from 'react'

import Image from 'next/image'

interface ProjectCardProps {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    link: string;
    type: string;
}

export const ProjectCard = (props: ProjectCardProps) => {

    const { title, date, description, imageUrl, link } = props;

    return (
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8
                        px-4 py-6
                        transition-all duration-300 hover:translate-x-1
                        shadow-md dark:ring-2 dark:ring-white dark:shadow-white rounded-lg">
            <div className="w-full md:w-1/3 overflow-hidden">
                <div className="relative w-full h-[250px]">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-fill object-top transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
                <h3 className="text-2xl font-medium text-gray-800 dark:text-white">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {date}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
                <div className="mt-4">
                    <a
                        href={`https://github.com/${link}`}
                        target="_blank"
                        className="text-sm text-gray-600 transition dark:text-gray-300 
                                        flex items-center 
                                        cursor-pointer 
                                        !rounded-button 
                                        whitespace-nowrap
                                        hover:transform hover:translate-x-2
                                        duration-300"
                    >
                        View details &rarr;
                    </a>
                </div>
            </div>
        </div>
    )
}
