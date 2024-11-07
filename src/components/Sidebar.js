import React from "react";
import './componentStyle/SidebarStyle.css';
// import Ai from "./Ai";
import Ai2 from "./Ai2";
import './index.css'
function App() {
    return (
        <>
        <input type="checkbox" id="ham-menu" />
        <label htmlFor="ham-menu">
          <div className="hide-des">
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
          </div>
        </label>
        
        <div className="full-page-green" />
        
        <div className="ham-menu">
        {/* <Ai/> */}
        <Ai2 />
          
        </div>
        
      </>
      
    );
  }
  
  export default App;
  


// import React, { useState } from 'react';
// import { Sidebar } from 'primereact/sidebar';
// import { Button } from 'primereact/button';
// import Ai from "./Ai";
// import './componentStyle/SidebarStyle.css';


// export default function SizeDemo() {
//     const [visible, setVisible] = useState(false);

//     return (
//         <div className="card flex justify-content-center">
//             <Sidebar visible={visible} onHide={() => setVisible(false)} className="AiSidebar w-full md:w-20rem lg:w-30rem">
//                 <h2>Sidebar</h2>
//                 <p>
//                     {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     import Ai from "./components/Ai"; */}
//                     <Ai/>
//                 </p>
//             </Sidebar>
//             <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
//         </div>
//     )
// }
        