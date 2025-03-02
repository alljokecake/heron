import "./App.css";
import { TitleBar } from "./components/titlebar/titlebar";
import { Pagelet } from "./components/pagelet/pagelet";
// import { NavBar } from "./components/navbar/navbar";
// import { Panel } from "./components/panel/panel";

// TitleBar
// Pagelet -> Default(Panel) or Custom

// TODO:
// rename TitleBar to TopBar
// change the structure of the App to Titlebar then Pagelet

// function App() {
//     return(
//         <div className="fixed">
//           <div className="fixed h-full w-full bg-[#2a2a2a]">
//             <TitleBar />
//               <div className="flex-grow pt-10">
//               <NavBar />
//             </div>
//             <div className="h-full w-full bg-[#1e1e1e]">
//               <Panel />
//             </div>
//           </div>
//         </div>
//     );
// }
// 
// export default App;

function App() {
    return(
        <div className="fixed">
          <div className="fixed h-full w-full bg-[#2a2a2a]">
            <TitleBar />
            <div className="pt-10 h-full w-full">
              <Pagelet />
            </div>
          </div>
        </div>
    );
}

export default App;
