import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React,{ useState, useEffect,Component } from "react";
import {Routes,BrowserRouter as Router,Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './sites/Home';
import Menu from './sites/Menu';
import CalorieCalc from './sites/CalorieCalc';

function App() {
  // constants
<<<<<<< HEAD
  const base_url = 'http://139.162.156.195:8000/'
=======
  const base_url = 'http://139.144.77.237:8000/'
>>>>>>> d2d68a76377a6c15af4d9d9d2ec16add76a82b5f
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home url={base_url}/>} ></Route>
          <Route path="/menu" element={<Menu url={base_url}/>} ></Route>
          <Route path="/calc" element={<CalorieCalc url={base_url}/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
