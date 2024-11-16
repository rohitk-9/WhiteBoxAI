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
  {/* <a href="#about"><span id = "nav-txt">hello</span></a> */}
</div>
</>
  )
}