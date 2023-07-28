import React from 'react';
import logo from './/images/logo.png';
import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { GiHelp } from 'react-icons/gi';
import { BiSolidContact } from 'react-icons/bi';
import {FaBookReader } from 'react-icons/fa';
import {BiLogInCircle } from 'react-icons/bi';
import {ImManWoman } from 'react-icons/im';


export default function Navbar() {
  return (
    <div>
       <div class="topnav">
      <img src={logo}  alt="" href="/"/>
        <a href="/Profile"><ImManWoman/> Profile</a>
        <a href="/Login"><BiLogInCircle/> Login</a>
        <a href="/about"><FaBookReader/> About</a>
        <a href="/contact"><BiSolidContact/> Contact</a>
        <a href="/help"><GiHelp/> Help</a>
        <a class="active" href="/"><AiFillHome/> Home</a><hr/>
      </div>
    </div>
  )
}
