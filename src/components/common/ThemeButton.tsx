"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="group cursor-pointer p-2.5 rounded-3xl transition
                bg-transparent hover:bg-gray-200  dark:hover:bg-black
                text-white hover:text-black dark:text-black dark:hover:text-white"
      onClick={changeTheme}
    >
      {resolvedTheme === "light" ? (
        <MdOutlineLightMode className="w-7 h-7 text-white hover:text-black" />
      ) : (
        <MdLightMode className="w-7 h-7 text-black hover:text-white" />
      )}
    </button>
  );
};
