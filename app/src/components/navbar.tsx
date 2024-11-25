import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Dot, FolderSearch2, Search, Settings } from "lucide-react";

export const NavBar = () => {
  return (
    <div className="bg-[#1e1e1e] h-[50px] w-full flex items-center px-2">
      <div className="flex items-center space-x-2">
        <Button size="icon" variant="bar">
          <ChevronLeft size={24} color="#F5FFFa" strokeWidth={1.5} />
        </Button>
        <Button size="icon" variant="bar">
          <ChevronRight size={24} color="#F5FFFa" strokeWidth={1.5} />
        </Button>
        <div className= "flex items-center">
          <Button size="icon" variant="bar">
            <Dot size={24} color="#F5FFFa" strokeWidth={2} />
            <Dot size={24} color="#F5FFFa" strokeWidth={2} className="ml-[-15px]"/>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 flex-grow">
        <div className="h-[30px] bg-[#252525] w-full max-w-full rounded-lg"></div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-0 bg-purple-500 rounded-lg">
          <Button size="icon" variant="bar_purple">
            <FolderSearch2 size={20} color="#F5FFFa" strokeWidth={1} />
          </Button>
          <Button size="icon" variant="bar_purple">
            <Search size={20} color="#F5FFFa" strokeWidth={1} />
          </Button>
        </div>
        <Button size="icon" variant="bar">
          <Settings size={20} color="#F5FFFa" strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
};
