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
      {/* <Landing /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;



/*
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Stocks from './components/stocks';
import Favourites from './components/favourites';
import Cart from './components/cart';

function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<Stocks/>} />
      <Route path="/favourites"  element={<Favourites />}/>
      <Route path="/cart"  element={<Cart/>}/>
    </Routes>
    </div>
    </>
   
  );
}

export default App;*/