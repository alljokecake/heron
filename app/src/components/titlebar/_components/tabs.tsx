import "../titlebar.css";

import { Download } from "lucide-react";

// const Tabs = () => {
//   return (
//     <div className="flex items-center space-x-0 pl-3 max-w-[1000px]">
// 
//       <div className="h-[33px] bg-[#1e1e1e] w-[240px] mt-[7px] rounded-t-xl">
//         <div className="pl-3 pt-2 text-sm text-white">
//           Documents
//         </div>
//       </div>
//     </div>
//   );
// };
// 
// export default Tabs;


// const Tabs = () => {
//     return(
//     <div className="tab_container">
//         <div className="tab_list">
// 
//             <div className="tab">
//                 <div className="inner">
//                     <span className="border_left"></span>
//                     <span className="border_right"></span>
//                     <div className="text">Documents</div>
//                 </div>
//             </div>
//             <div className="tab active_tab">
//                 <div className="inner">
//                     <span className="border_left"></span>
//                     <span className="border_right"></span>
//                     <div className="text">Downloads</div>
//                 </div>
//             </div>
//             <div className="tab">
//                 <div className="inner">
//                     <span className="border_left"></span>
//                     <span className="border_right"></span>
//                     <div className="text">Local Disk (C:)</div>
//                 </div>
//             </div>
// 
//             <div className="w-[20px]">
//             </div>
//         
//         </div>
//     </div>
//     );
// }
// 
// export default Tabs;


import { useState } from 'react';

const Tabs = () => {
    // State to track active tab
    const [activeTab, setActiveTab] = useState(1);

    // Tab data as an array
    const tabs = ["Documents", "Downloads", "Local Disk (C:)"];

    // Function to handle tab click
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="tab_container">
            <div className="tab_list">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${activeTab === index ? 'active_tab' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        <div className="inner">
                            <span className="border_left"></span>
                            <span className="border_right"></span>
                            <div className="icon"><Download size={15}/></div>
                            <div className="text">{tab}</div>
                        </div>
                    </div>
                ))}

                <div className="w-[20px]"></div>
            </div>
        </div>
    );
};

export default Tabs;

// import { useState } from 'react';
// 
// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(0); // Track active tab
//   const [tabs, setTabs] = useState([
//     'Documents',
//     'Downloads',
//     'Local Disk (C:)',
//     'Settings'
//   ]); // Tab names
// 
//   return (
//     <div className="flex items-center space-x-0 pl-3 mt-[7px] max-w-[1000px]">
//       <div className="tab_list flex overflow-x-auto">
//         {tabs.map((tab, index) => (
//           <div
//             key={index}
//             className={`${
//               activeTab === index
//                 ? 'bg-[#1e1e1e] text-white ' // Active tab style
//                 : 'hover:bg-[#333333] text-gray-400' // Inactive tab style
//             } h-[33px] min-w-[200px] rounded-t-xl cursor-pointer flex items-center px-3 transition-all duration-300`}
//             onClick={() => setActiveTab(index)}
//           >
//             <div className="text-sm">{tab}</div>
// 
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// 
// export default Tabs;
