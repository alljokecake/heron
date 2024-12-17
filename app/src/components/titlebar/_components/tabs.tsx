import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import "../titlebar.css";

// TODO: Don't use custom button component or any sort. Replace them with,
// hover... in titlebar.css. We don't want the link selector cursor while
// hovering.
//
// TODO: Add close_tab button. 
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
                        </div>
                    </div>
                ))}
            </div>

            <div className="add_tab">
              <Button variant="bar" size="icon">
                <Plus size={22} strokeWidth={0.5} color="#FFFFFF"/>
              </Button>
            </div>

        </div>
    );
};

export default Tabs;
