import { useState } from 'react';
import { Plus, X, ChevronDown, Settings, FolderClosed, HardDrive, Download, FileText } from 'lucide-react';
import "../titlebar.css";

// TODO: TAB BEHAVIOUR:
// * Tabs and windowControls shouldn't collapse (min 50px gap between
//   components).
// * After hitting the gap limit, tabs should resize itself.
// * Tabs should be draggable inside the tab_container (react-dnd).

// @FIXME: Tab behaviour on close is weird. When closing a tab, if the tab isn't
// active, it should NOT make the tab next to it active. This is going to go
// away when we implement the rust part, because we are not gonna use standart
// vectors.

const DEFAULT_TAB_NAME = "Documents";
const Tabs = () => {
    const [tabs, setTabs] = useState([{ name: "Local Disk (C:)", isClosing: false, isAdding: false }]);
    const [activeTab, setActiveTab] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const handleAddTab = () => {
        const newTab = { name: DEFAULT_TAB_NAME, isClosing: false, isAdding: true };
        setTabs((prevTabs) => [...prevTabs, newTab]);
        setActiveTab(tabs.length); // Make the new tab active

        setTimeout(() => {
            setTabs((prevTabs) =>
                prevTabs.map((tab, i) =>
                    i === prevTabs.length - 1 ? { ...tab, isAdding: false } : tab
                )
            );
        }, 200);
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
        }, 100);
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
                              <img src="folder.svg" alt="Tab Icon" />
                            </div>
                            <div className="text">{tab.name}</div>
                            <div className="w-4"></div>
                            <div
                                className="close_tab"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCloseTab(index);
                                }}
                            >
                                <X size={18} strokeWidth={1.5} color="#FAFFFF" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="action_cluster">
                <div className="add_tab" onClick={handleAddTab}>
                    <Plus size={20} strokeWidth={1.0} color="#FAFFFF" />
                </div>
                <span className="action_divider"></span>
                <div className="add_tab_menu" onClick={() => setIsOpen(!isOpen)}>
                    <ChevronDown size={15} strokeWidth={1.5} color="#FAFFFF" />
                </div>
                {isOpen && (
                    <div className="menu">
                      <div className="menu-item">
                        <div className="icon">
                          <img src="drive.svg" alt="Tab Icon" />
                        </div>
                        <div className="text">Local Disk (C:)</div>
                      </div>
                      <div className="menu-item">
                        <div className="icon"><Download size={20} strokeWidth={1.5} color="#32a866" /></div>
                        <div className="text font-semibold">Downloads</div>
                      </div>
                      <div className="menu-item">
                        <div className="icon">
                          <img src="documents.svg" alt="Tab Icon" />
                        </div>
                        <div className="text">Documents</div>
                      </div>
                      <div className="menu-item-divider"></div>
                      <div className="menu-item">
                        <div className="icon"><Settings size={20} strokeWidth={1.5} color="#FAFFFF" /></div>
                        <div className="text">Settings</div>
                      </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;
