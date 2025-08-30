"use client";

import React from "react";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  return (
    <div className="w-full z-50">
      <div className="dark:bg-black flex justify-center">
        <div className="flex gap-3 items-center w-fit fixed top-7">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
