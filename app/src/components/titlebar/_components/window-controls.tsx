import { useEffect } from "react";

// TODO: Set restore
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeRestore,
  VscChromeClose,
} from "react-icons/vsc";

import { getCurrentWindow } from "@tauri-apps/api/window";

const WindowControls = () => {
  const appWindow = getCurrentWindow();

  // appWindow.isMaximized

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
        className="flex justify-center items-center w-[47px] h-[40px] hover:bg-[#333333] focus:outline-none"
      >
        <VscChromeMinimize size={16} color="#FFFFFF" strokeWidth={0.25} />
      </div>
      <div
        id="titlebar-maximize"
        className="flex justify-center items-center w-[47px] h-[40px] hover:bg-[#333333] focus:outline-none"
      >
        <VscChromeMaximize size={16} color="#FFFFFF" strokeWidth={0.25} />
      </div>
      <div
        id="titlebar-close"
        className="flex justify-center items-center w-[47px] h-[40px] hover:bg-[#C42B1C] focus:outline-none"
      >
        <VscChromeClose size={16} color="#FFFFFF" strokeWidth={0.25} />
      </div>
    </div>
  );
};

export default WindowControls;
