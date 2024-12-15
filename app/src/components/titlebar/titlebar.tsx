import Tabs from "./_components/tabs";
import WindowControls from "./_components/window-controls";

// FIXME: Prevent children from collapsing (Tabs | WindowControls)
export const TitleBar = () => {
  return (
    <div
      className="h-[40px] w-full bg-[#2a2a2a] select-none flex justify-between fixed top-0 left-0 right-0"
      data-tauri-drag-region
    >
      <Tabs />
      <WindowControls />
    </div>
  );
};
