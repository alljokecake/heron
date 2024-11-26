import "./App.css";
import { TitleBar } from "./components/titlebar/titlebar";
import { NavBar } from "./components/navbar";
import { SideBar } from "./components/sidebar";
import { Panel } from "./components/panel/panel";

function App() {
    return(
        <div className="fixed">
          <div className="fixed h-full w-full bg-[#2a2a2a]">
            <div className="sticky">
              <TitleBar />
              <div className="flex-grow pt-10">
                <NavBar />
              </div>
            </div>
            <div className="w-full h-full flex bg-[#1e1e1e]">
              <SideBar />
              <Panel />
            </div>
          </div>
        </div>
    );
}

export default App;
