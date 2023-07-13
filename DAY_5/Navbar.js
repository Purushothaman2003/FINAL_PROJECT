import React from 'react';
import logo from './/images/logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
       <div class="topnav">
      <img src={logo}  alt="" />
        <a href="/reg">Register</a>
        <a href="/Login">Login</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#news">News</a>
        <a class="active" href="/">Home</a>
      </div>
    </div>
  )
}
