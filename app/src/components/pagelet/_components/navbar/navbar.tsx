// import { ChevronLeft, ChevronRight, Dot, Search } from "lucide-react";
// 
// import "./navbar.css";
// 
// // TODO: Set option for unavailable chevrons.
// export const NavBar = () => {
//   return (
//     <div className="bg-[#1e1e1e] h-[50px] w-full flex items-center px-2 select-none">
//       <div className="flex items-center space-x-2">
//         <div className="nav_button">
//           <ChevronLeft size={24} color="#F5FFFa" strokeWidth={1.5} />
//         </div>
//         <div className="nav_button">
//           <ChevronRight size={24} color="#F5FFFa" strokeWidth={1.5} />
//         </div>
//         <div className= "flex items-center">
//           <div className="nav_button">
//             <Dot size={24} color="#F5FFFa" strokeWidth={2} />
//             <Dot size={24} color="#F5FFFa" strokeWidth={2} className="ml-[-15px]"/>
//           </div>
//         </div>
//       </div>
// 
//       <div className="flex items-center justify-center space-x-3 px-2 flex-grow">
//         <div className="flex items-center h-[30px] bg-[#252525] w-full max-w-full rounded-md pl-2 text-white text-[13.5px]">
//           Local Disk (C:) / Users / ilhan / Desktop
//         </div>
//         <div className="flex items-center px-2 justify-start h-[30px] bg-[#252525] w-[350px] max-w-full rounded-md
//         text-[#616161] text-[13.5px] pt-1 pl-2">
//           <div className="pr-1 pb-1">
//             <Search size={16} color="#666666" strokeWidth={2.0} />
//           </div>
//           Search or jump to...
//         </div>
//       </div>
// 
//     </div>
//   );
// };


import { ChevronLeft, ChevronRight, Dot, Search } from "lucide-react";
import { useState } from "react";
import "./navbar.css";

// TODO: Set option for unavailable chevrons.
export const NavBar = () => {
  const [currentPath, setCurrentPath] = useState("Local Disk (C:)/Users/ilhan/Desktop");

  // Convert path into clickable parts
  const pathSegments = currentPath.split("/");

  // Function to handle navigation when clicking a directory
  const handlePathClick = (index: number) => {
    // Generate the new path up to the clicked directory
    const newPath = pathSegments.slice(0, index + 1).join("/");
    setCurrentPath(newPath);
  };

  return (
    <div className="bg-[#1e1e1e] h-[50px] w-full flex items-center px-2 select-none">
      <div className="flex items-center space-x-2">
        <div className="nav_button">
          <ChevronLeft size={24} color="#F5FFFa" strokeWidth={1.5} />
        </div>
        <div className="nav_button">
          <ChevronRight size={24} color="#F5FFFa" strokeWidth={1.5} />
        </div>
        <div className="flex items-center">
          <div className="nav_button">
            <Dot size={24} color="#F5FFFa" strokeWidth={2} />
            <Dot size={24} color="#F5FFFa" strokeWidth={2} className="ml-[-15px]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-3 px-2 flex-grow">
        {/* Dynamic Path Display */}
        <div className="flex items-center h-[30px] bg-[#252525] w-full max-w-full rounded-md pl-2 text-white text-[13.5px]">
          {pathSegments.map((segment, index) => (
            <div key={index} className="flex items-center">
              <button
                className="hover:text-gray-400 transition text-white px-1"
                onClick={() => handlePathClick(index)}
              >
                {segment}
              </button>
              {index < pathSegments.length - 1 && <span className="mx-1">/</span>}
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center px-2 justify-start h-[30px] bg-[#252525] w-[350px] max-w-full rounded-md text-[#616161] text-[13.5px] pt-1 pl-2">
          <div className="pr-1 pb-1">
            <Search size={16} color="#666666" strokeWidth={2.0} />
          </div>
          Search or jump to...
        </div>
      </div>
    </div>
  );
};
