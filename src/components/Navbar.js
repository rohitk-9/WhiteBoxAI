import React from 'react';
import {Link} from 'react-router-dom';

import './componentStyle/Navbar.css'
// import Ai2 from "./Ai2"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar"
// import FrontendEditor from "./FrontendEditor"


export default function Navbar(props) {
  return (
<>
<div class="topnav">
  <a class="active" href="#home" ><Sidebar /></a>
  <Link to="/">Online code Editor</Link>
  <Link to="/components/FrontendEditor"><span id = "nav-txt"> FrontendEditor</span></Link>
</div>
</>
  )
}




// const Navbar=()=>{
//     return (    
//                 <div className='navBar'>
//                     <div className='stocks'>
//                         <Link to="/">Stocks</Link>
//                     </div>
//                     <div className='FrontendEditor'>
//                         <Link to="/components/FrontendEditor">FrontendEditor</Link>
//                     </div>
//                 </div>
//     )

// }

// export default Navbar;




/*
import React from 'react'
import './componentStyle/Navbar.css'
// import Ai2 from "./Ai2"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar"
// import FrontendEditor from "./FrontendEditor"


export default function Navbar(props) {
  return (
<>
<div class="topnav">
  <a class="active" href="#home" ><Sidebar /></a>
  <a href="#contact"><span id = "nav-txt"> {props.val}</span></a>
</div>
</>
  )
} */