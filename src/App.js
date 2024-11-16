import React from 'react'
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import FrontendEditor from "./components/FrontendEditor"

function App() {
  return (
    <>
      <Navbar val ="Front-end Editor" /><br/>
        <div>
          <Routes>    
            <Route path="/"  element={<Landing/>} />    
            <Route path="/components/FrontendEditor"  element={<FrontendEditor/>} />
          </Routes>
      </div>

    </>
  );
}

export default App;
