import { useState } from 'react';

import { Plus, X } from 'lucide-react';

import "../titlebar.css";

// TODO: Better coloring overall.
// TODO: Don't use custom button component or any sort. Replace them with,
// hover... in titlebar.css. We don't want the link selector cursor while
// hovering.
//
// TODO: Handle rust's json object. Attach tab sessions accordingly.
//  - TODO: Custom folder icons
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const tabs = ["Documents", "Downloads", "Local Disk (C:)"];

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
                              <img src="folder-constant.svg"/>
                            </div>
                            <div className="text">{tab}</div>
                            <div className="close_tab">
                              <X size={20} strokeWidth={1.0} color="#FAFFFF"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="add_tab">
              <Plus size={20} strokeWidth={1} color="#FFFFFF"/>
            </div>

        </div>
    );
};

export default Tabs;
