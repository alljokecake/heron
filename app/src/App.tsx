import "./App.css";
import { TitleBar } from "./components/titlebar/titlebar";
import { NavBar } from "./components/navbar";
import { SideBar } from "./components/sidebar";

function App() {
    return(
        <div className="h-full bg-[#2a2a2a]">
          <TitleBar />
          <div className="min-h-screen flex-grow pt-10">
            <NavBar />
            <SideBar />
          </div>
        </div>
    );
}

export default App;
