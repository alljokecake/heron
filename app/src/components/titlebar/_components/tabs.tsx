import { useState } from 'react';

import "../titlebar.css";

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
                            <div className="icon">
                              <img src="folder_icon.svg"/>
                            </div>
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
