"use client";

import { useEffect } from "react";
import { Window } from "@tauri-apps/api/window";
import { X, Minus, Square } from "lucide-react";

export const TitleBar = () => {
    const appWindow = new Window('heron');
    useEffect(() => {
        const minimizeButton = document.getElementById("titlebar-minimize");
        const maximizeButton = document.getElementById("titlebar-maximize");
        const closeButton = document.getElementById("titlebar-close");
        
        if (minimizeButton) {
            minimizeButton.addEventListener("click", () => appWindow.minimize());
        }

        if (maximizeButton) {
            maximizeButton.addEventListener("click", () => appWindow.toggleMaximize());
        }

        if (closeButton) {
            closeButton.addEventListener("click", () => appWindow.close());
        }

        return () => {
            minimizeButton?.removeEventListener("click", () => appWindow.minimize());
            maximizeButton?.removeEventListener("click", () => appWindow.toggleMaximize());
            closeButton?.removeEventListener("click", () => appWindow.close());
        };
    }, []);

  return (
    <div
      className="h-[40px] w-full bg-[#1E1E1E] select-none flex justify-end fixed top-0 left-0 right-0"
      data-tauri-drag-region
    >
      <div
        id="titlebar-minimize"
        className="flex justify-center items-center w-[45px] h-[40px] hover:bg-[#333333]"
      >
        <Minus size={20} color="#F5FFFa" strokeWidth={0.5} classname="h-2 w-2 " />
      </div>
      <div
        id="titlebar-maximize"
        className="flex justify-center items-center w-[45px] h-[40px] hover:bg-[#333333]"
      >
        <Square size={12} color="#F5FFFa" strokeWidth={1}classname="h-2 w-2" />
      </div>
      <div
        id="titlebar-close"
        className="flex justify-center items-center w-[45px] h-[40px] hover:bg-red-500"
      >
        <X size={20} color="#F5FFFa" strokeWidth={1}classname="h-2 w-2" />
      </div>
    </div>
  );
}
