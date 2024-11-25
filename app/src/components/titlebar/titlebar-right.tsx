import { useEffect } from "react";
import { X, Minus, Square } from "lucide-react";

import { getCurrentWindow } from "@tauri-apps/api/window";

const TitleBarRight = () => {
  const appWindow = getCurrentWindow();

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
      minimizeButton?.removeEventListener("click", () => appWindow.minimize());
      maximizeButton?.removeEventListener("click", () => appWindow.toggleMaximize());
      closeButton?.removeEventListener("click", () => appWindow.close());
    };
  }, [appWindow]);

  return (
    <div className="absolute top-0 right-0 h-full flex items-center">
      <div
        id="titlebar-minimize"
        className="flex justify-center items-center w-[45px] h-[40px] hover:bg-[#333333] focus:outline-none"
      >
        <Minus size={20} color="#F5FFFa" strokeWidth={0.5} />
      </div>
      <div
        id="titlebar-maximize"
        className="flex justify-center items-center w-[45px] h-[40px] hover:bg-[#333333] focus:outline-none"
      >
        <Square size={12} color="#F5FFFa" strokeWidth={1} />
      </div>
      <div
        id="titlebar-close"
        className="flex justify-center items-center w-[45px] h-[40px] hover:bg-red-500 focus:outline-none"
      >
        <X size={20} color="#F5FFFa" strokeWidth={1} />
      </div>
    </div>
  );
};

export default TitleBarRight;
