import "./App.css";
import { TitleBar } from "./components/titlebar/titlebar";
import { NavBar } from "./components/navbar/navbar";
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
            <div className="fixed h-full w-full bg-[#1e1e1e]">
              <Panel />
            </div>
          </div>
        </div>
    );
}

export default App;
