"use client";

import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { FaBars } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { HiHome } from "react-icons/hi2";
import { HiOutlineFolderOpen } from "react-icons/hi2";
import { HiFolderOpen } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { HiUser } from "react-icons/hi";

interface NavItem {
    name: string;
    route: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
}

const navItems: NavItem[] = [
    { name: "HomePage", route: "/", icon: <HiOutlineHome className="w-6 h-6" />, activeIcon: <HiHome className="w-6 h-6" /> },
    { name: "Projects", route: "/projects", icon: <HiOutlineFolderOpen className="w-6 h-6" />, activeIcon: <HiFolderOpen className="w-6 h-6" /> },
    { name: "Experience", route: "/experience", icon: <HiOutlineBriefcase className="w-6 h-6" />, activeIcon: <HiBriefcase className="w-6 h-6" /> },
    { name: "Personal", route: "/about", icon: <HiOutlineUser className="w-6 h-6" />, activeIcon: <HiUser className="w-6 h-6" /> },
]

export const Sidebar = () => {

    const [activeItem, setActiveItem] = useState<string>('');

    const pathname = usePathname();

    useEffect(() => {
        const matched = navItems.find((item) => item.route === pathname);
        setActiveItem(matched?.name || "");
    }, [pathname]);

    const [isMobile, setisMobile] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const barRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setisMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //For mobile
    const handleClick = () => {
        if (isMobile) {
            setExpanded((prev) => !prev);
        }
    };

    // For mobile
    useEffect(() => {
        const handleClickOutsideMobile = (e: MouseEvent) => {
            if (
                isMobile &&
                expanded &&
                barRef.current &&
                !barRef.current.contains(e.target as Node)
            ) {
                setExpanded(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideMobile);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideMobile);
        };
    }, [isMobile, expanded]);

    return (
        <div className="relative">
            <motion.div
                ref={barRef}
                onClick={handleClick}
                onMouseEnter={() => {
                    if (!isMobile) setExpanded(true);
                }}
                onMouseLeave={() => {
                    if (!isMobile) setExpanded(false);
                }}
                animate={
                    isMobile
                        ? { height: expanded ? 200 : 40 }
                        : { width: expanded ? 230 : 40 }
                }
                transition={{ duration: 0.3 }}
                className={`absolute -top-4.5 right-0 sm:right-4
                            p-2 rounded-xl bg-black dark:bg-white transition
                            flex justify-center items-center
          ${isMobile ? "w-10" : "h-10"}
        `}
            >
                {!expanded ? <FaBars className="w-5 h-5 text-white dark:text-black" /> : (
                    <div
                        className={`flex items-center justify-between
                                    ${expanded ? `${isMobile ? "flex-col h-full" : "flex-row w-full p-2"}` : ""}
                                    
                                    `}
                    >
                        {navItems.map(({ name, route, icon, activeIcon }) => (
                            <Link href={route} key={name}>
                                <div
                                    onClick={() => {
                                        if(isMobile) setExpanded(false);
                                        setActiveItem(name)
                                    }}
                                    className={`relative group cursor-pointer p-2 rounded-md transition
                                                bg-transparent text-white dark:text-black hover:bg-gray-200 hover:text-black`}
                                >
                                    {activeItem === name ? activeIcon : icon}
                                    <span className="absolute -bottom-4.5 left-0 text-sm hidden group-hover:block dark:text-white">
                                        {name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
};
