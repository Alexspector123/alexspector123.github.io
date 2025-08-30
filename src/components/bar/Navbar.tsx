"use client";

import React, { useState, useEffect } from "react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed w-full z-50">
      <div className="bg-white dark:bg-black border-b border-gray-200 px-8 sm:px-10 py-5.5 flex items-center justify-between">
        <span className="text-2xl font-mono dark:text-white">Hitori</span>

        <div className="flex items-center gap-3 sm:gap-0">
          <Sidebar />
          {mounted && (
            <button className="cursor-pointer" onClick={changeTheme}>
              {resolvedTheme === "light" ? (
                <MdLightMode className="w-7 h-7 text-black" />
              ) : (
                <MdOutlineLightMode className="w-7 h-7 text-white" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
