import React from 'react';
import {Link} from 'react-router-dom';

import './componentStyle/Navbar.css'
import Sidebar from "./Sidebar"


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
