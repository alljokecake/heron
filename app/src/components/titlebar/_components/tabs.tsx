import { useState, useEffect } from 'react';
import { Plus, X, ChevronDown, Settings, Download } from 'lucide-react';
import { invoke } from '@tauri-apps/api/core';
import "../titlebar.css";

const Tabs = () => {
    const [tabs, setTabs] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetchTabs = async () => {
            try {
                const response: any[] = await invoke("get_tabs");
                const active: number = await invoke("get_active_tab");
                setTabs(response);
                setActiveTab(active);
            } catch (error) {
                console.error("Error fetching tabs:", error);
            }
        };
        fetchTabs();
    }, []);

    // FIXME
    const handleTabClick = (index: number) => {
        // It probably should find the Tab ID from corresponding order of it
        setActiveTab(index);
    };

    // FIXME
    const handleAddTab = async () => {
        try {
            const newTab = {
                uuid: Date.now(), // Use a new unique ID (consider using a more robust method)
                label: "New Tab",
                icon: "folder.svg", // Default icon
                path: null,
                custom: false,
            };
            const tabId = await invoke("add_tab", { tab: newTab });
            setTabs(prevTabs => [...prevTabs, { ...newTab, uuid: tabId }]);
            setActiveTab(newTab.uuid);
        } catch (error) {
            console.error("Error adding tab:", error);
        }
    };

    // FIXME
    const handleCloseTab = async (uuid: number) => {
        try {
            await invoke("close_tab", { uuid });
            setTabs(prevTabs => prevTabs.filter(tab => tab.uuid !== uuid));
            if (tabs.length === 1) {
                setActiveTab(0);
            } else {
                setActiveTab(prevActiveTab => (prevActiveTab === uuid ? tabs[0]?.uuid : prevActiveTab));
            }
        } catch (error) {
            console.error("Error closing tab:", error);
        }
    };

    return (
        <div className="tab_container">
            <div className="tab_list">
                {tabs.map((tab, index) => (
                    <div
                        key={tab.uuid}
                        className={`tab ${activeTab === tab.uuid ? "active_tab" : ""}`}
                        onClick={() => handleTabClick(index)}
                    >
                        <div className="inner">
                            <span className="border_left"></span>
                            <span className="border_right"></span>
                            <div className="icon">
                                <img src={tab.icon} alt="Tab Icon" />
                            </div>
                            <div className="text">{tab.label}</div>
                            <div className="w-4"></div>
                            <div
                                className="close_tab"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCloseTab(tab.uuid);
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
                        <div className="text font-bold">Downloads</div>
                      </div>
                      <div className="menu-item">
                        <div className="icon">
                          <img src="documents.svg" alt="Tab Icon" />
                        </div>
                        <div className="text">Documents</div>
                      </div>
                      <div className="menu-item">
                        <div className="icon">
                          <img src="folder.svg" alt="Tab Icon" />
                        </div>
                        <div className="text">heron</div>
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
