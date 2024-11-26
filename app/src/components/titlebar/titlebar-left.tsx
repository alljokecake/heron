import { Plus } from "lucide-react";
import { Button } from "../ui/button";

// :8 Inactive Window
// :15 Active Window
const TitleBarLeft = () => {
  return (
    <div className="flex items-center space-x-1 pl-3 max-w-[1000px]">
      <div className="h-[40px] bg-[#2a2a2a] w-[250px] rounded-t-2xl">
        <div className="pl-3 pt-3 text-white">
          Documents
        </div>
      </div>

      <div className="h-[40px] bg-[#1e1e1e] w-[250px] ">
        <div className="bg-purple-400 h-1"></div>
        <div className="pl-3 pt-2 text-white">
          Downloads
        </div>
      </div>
      <div className="flex items-center ">
        <Button size="icon" variant="bar">
          <Plus size={20} color="#616161" strokeWidth={2} />
        </Button>
      </div>
    </div>
  );
};

export default TitleBarLeft;

