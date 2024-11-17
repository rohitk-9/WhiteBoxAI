import React from 'react';
import {Link} from 'react-router-dom';

import './componentStyle/Navbar.css'
import Sidebar from "./Sidebar"


export default function Navbar(props) {
  return (
<>
<div className="topnav">
  <a className="active" href="#home" ><Sidebar /></a>
  <Link to="/WhiteBoxAI">Online code Editor</Link>
  <Link to="/FrontendEditor"> FrontendEditor</Link>
</div>
</>
  )
}
