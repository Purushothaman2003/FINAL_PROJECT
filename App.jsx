import React from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Register/>}/>
       </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export default App;


