import React from 'react'
import './componentStyle/Navbar.css'
import Ai2 from "./Ai2"
import Sidebar from "./Sidebar"


export default function Navbar() {
  return (
<>
<div class="topnav">
  <a class="active" href="#home" ><Sidebar /></a>
  <a href="#contact"><span id = "nav-txt"> hello</span></a>
  <a href="#about"><span id = "nav-txt">hello</span></a>
</div>


</>
  )
}