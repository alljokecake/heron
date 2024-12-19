import { useState } from 'react';
import { Plus, X, ChevronDown} from 'lucide-react';
import "../titlebar.css";

// TODO: Chevy down box.
// TODO: Limit the tab container.
// TODO: Reactive tab container.
// TODO: Dragable tabs, react-dnd?
// TODO: Spawn info-box, when hovered over on tabs.
//
// TODO: Handle rust's json object. Attach tab sessions accordingly.
//  - TODO: Custom folder icons

// FIXME: Tab behaviour on close is weird.

const DEFAULT_TAB_NAME = "Documents";

const Tabs = () => {
    // Tab stuff are hardcoded for now. We have to derive it from the rust part.
    const [tabs, setTabs] = useState([{ name: "Local Disk (C:)", isClosing: false, isAdding: false }]);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const handleAddTab = () => {
        const newTab = { name: DEFAULT_TAB_NAME, isClosing: false, isAdding: true };
        setTabs((prevTabs) => [...prevTabs, newTab]);
        setActiveTab(tabs.length); // Make the new tab active

        // Remove `isAdding` class after the animation duration
        setTimeout(() => {
            setTabs((prevTabs) =>
                prevTabs.map((tab, i) =>
                    i === prevTabs.length - 1 ? { ...tab, isAdding: false } : tab
                )
            );
        }, 200); // Match the animation duration
    };

    const handleCloseTab = (index: number) => {
        setTabs((prevTabs) =>
                prevTabs.map((tab, i) => (i === index ? { ...tab, isClosing: true } : tab))
               );

        setTimeout(() => {
                setTabs((prevTabs) => {
                        const newTabs = prevTabs.filter((_, i) => i !== index);

                        setActiveTab((prevActiveTab) => {
                                if (index === prevActiveTab) {
                                return Math.min(index, newTabs.length - 1);
                                } else if (index < prevActiveTab) {
                                return prevActiveTab - 1;
                                }
                                return prevActiveTab;
                                });

                        return newTabs;
                        });
                }, 100); // Match the animation duration
    };

    return (
        <div className="tab_container">
            <div className="tab_list">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${
                            activeTab === index ? "active_tab" : ""
                        } ${tab.isClosing ? "closing_tab" : ""} ${
                            tab.isAdding ? "adding_tab" : ""
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        <div className="inner">
                            <span className="border_left"></span>
                            <span className="border_right"></span>
                            <div className="icon">
                                <img src="folder-constant.svg" alt="Tab Icon" />
                            </div>
                            <div className="text">{tab.name}</div>
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
            <div className="action_cluster">
                <div className="add_tab" onClick={handleAddTab}>
                    <Plus size={22} strokeWidth={1.0} color="#FAFFFF" />
                </div>
                <span className="action_divider"></span>
                <div className="chevy_down">
                    <ChevronDown size={20} strokeWidth={1.0} color="#FAFFFF" />
                </div>
            </div>
        </div>
    );
};

export default Tabs;
