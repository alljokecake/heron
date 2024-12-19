import { ChevronLeft, ChevronRight, Dot, Settings } from "lucide-react";

import "./navbar.css";

// TODO: Set option for unavailable chevrons.
export const NavBar = () => {
  return (
    <div className="bg-[#1e1e1e] h-[50px] w-full flex items-center px-2">
      <div className="flex items-center space-x-2">
        <div className="nav_button">
          <ChevronLeft size={24} color="#F5FFFa" strokeWidth={1.5} />
        </div>
        <div className="nav_button">
          <ChevronRight size={24} color="#F5FFFa" strokeWidth={1.5} />
        </div>
        <div className= "flex items-center">
          <div className="nav_button">
            <Dot size={24} color="#F5FFFa" strokeWidth={2} />
            <Dot size={24} color="#F5FFFa" strokeWidth={2} className="ml-[-15px]"/>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-3 px-4 flex-grow">
        <div className="h-[30px] bg-[#252525] w-full max-w-full rounded-md"></div>
        <div className="h-[30px] bg-[#252525] w-[350px] max-w-full rounded-md
        text-[#616161] pt-1 pl-2">
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="nav_button">
          <Settings size={20} color="#F5FFFa" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};
