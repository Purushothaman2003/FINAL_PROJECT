import React from 'react'
import Navbar from'./Navbar';
import about from '..//src/images/about.jpg'
import Footer from './Footer';
import './About.css';
import about1 from '..//src/images/about1.jpg'

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className="about_main">
      <div className='Name'>
        <h2>About the Portal</h2>
        <img class='img' src={about1} alt="" /><br/><br/>
        <p>This is the official portal of Income Tax Department, Ministry of Finance, Government of India.  The objective of this portal is to provide a single window
        <br/> access to the income tax related services for taxpayers and other stakeholders.<br/></p>
      
      </div>
    </div>
      <Footer/>
    </div>
  )
}
