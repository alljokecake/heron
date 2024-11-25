import { Plus } from "lucide-react";

const TitleBarLeft = () => {
  return (
    <div className="flex items-center space-x-1 pl-3 pt-4 max-w-[1000px]">
      <div className="h-[40px] bg-[#1e1e1e] w-[250px] rounded-t-lg"></div>
      <div className="pb-1 flex items-center space-x-1 pl-1">
        <Plus size={20} color="#616161" strokeWidth={2} />
      </div>
    </div>
  );
};

export default TitleBarLeft;
