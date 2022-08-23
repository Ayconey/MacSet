import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React,{ useState, useEffect,Component } from "react";
import {Routes,BrowserRouter as Router,Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './sites/Home';
import Menu from './sites/Menu';
function App() {
  // constants
  const base_url = 'http://127.0.0.1:8000/'
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home url={base_url}/>} ></Route>
          <Route path="/menu" element={<Menu url={base_url}/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
