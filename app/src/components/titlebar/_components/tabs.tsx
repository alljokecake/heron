
import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import "../titlebar.css";

// TODO: add_tab, close_tab animations.
// TODO: Dragable tabs, react-dnd?
// TODO: Reactive tab container.
// TODO: Spawn info-box, when hovered over on tabs.
//
// TODO: Handle rust's json object. Attach tab sessions accordingly.
//  - TODO: Custom folder icons
// TODO: Better coloring overall.

const DEFAULT_TAB_NAME = "Documents";

const Tabs = () => {
    const [tabs, setTabs] = useState(["Local Disk (C:)"]);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const handleAddTab = () => {
        setTabs([...tabs, DEFAULT_TAB_NAME]);
        setActiveTab(tabs.length); // Make the new tab active
    };

    const handleCloseTab = (index: number) => {
        const newTabs = tabs.filter((_, i) => i !== index);
        setTabs(newTabs);

        // Adjust activeTab index if needed
        if (activeTab >= newTabs.length) {
            setActiveTab(newTabs.length - 1);
        } else if (index === activeTab) {
            setActiveTab(activeTab - 1 >= 0 ? activeTab - 1 : 0);
        }
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
                                <img src="folder-constant.svg" alt="Tab Icon" />
                            </div>
                            <div className="text">{tab}</div>
                            <div className="w-4"></div>
                            <div
                                className="close_tab"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering tab click
                                    handleCloseTab(index);
                                }}
                            >
                                <X size={20} strokeWidth={1.0} color="#FAFFFF" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="add_tab" onClick={handleAddTab}>
                <Plus size={20} strokeWidth={1.0} color="#FAFFFF" />
            </div>
        </div>
    );
};

export default Tabs;
