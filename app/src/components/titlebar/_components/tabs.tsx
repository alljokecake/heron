import { useState } from 'react';
import { Plus, X, ChevronDown} from 'lucide-react';
import "../titlebar.css";

// TODO: Chevy down box.

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
    const [showSquare, setShowSquare] = useState(false); // State for the rounded square

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

    const handleChevyDownClick = () => {
        setShowSquare((prev) => !prev); // Toggle square visibility
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
                                    e.stopPropagation();
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
                <div className="chevy_down" onClick={handleChevyDownClick}>
                    <ChevronDown size={20} strokeWidth={1.0} color="#FAFFFF" />
                </div>
                {showSquare && <div className="rounded_square"></div>} {/* Rounded square */}
            </div>
        </div>
    );
};

export default Tabs;
