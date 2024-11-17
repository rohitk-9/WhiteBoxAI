import React from 'react';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import FrontendEditor from "./components/FrontendEditor";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar /><br/>
        <div>
          <Routes>    
            <Route path="/WhiteBoxAI" element={<Landing/>} />    
            <Route path="*" element={<Landing />} />
            <Route path="/FrontendEditor"  element={<FrontendEditor/>} />
          </Routes>
      </div>

    </div>
  );
}

export default App;
