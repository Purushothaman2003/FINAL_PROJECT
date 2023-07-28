import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Contact.css';
import { Link } from 'react-router-dom';
import { LuPhoneCall } from 'react-icons/lu';
import { AiOutlineMail } from 'react-icons/ai';
import axios from 'axios';
// import { Button } from '@coreui/coreui';

export default function Contact() {
  const[name,setname]=useState("");
    const[email,setEmail]=useState("");
    const[description,setdescription]=useState("");
    const handleSubmit = (e)=>{
            const data={
                name:name,
                email:email,
                description:description
            }
            alert("successfull");
            axios.post("http://127.0.0.1:8081/addsupport",data);
    }
    const handlename =(e)=>{
        setname(e.target.value);
    }
    const handleemail =(e)=>{
        setEmail(e.target.value);
    }
    const handledes =(e)=>{
        setdescription(e.target.value);
    }
  return (
    <div>
        <Navbar/>
      <div className="contact_main">
      <h2>Contact US</h2>
        <div className='bo1'>
            <h3>e-filing and Centralized Processing Center</h3>
            <p>e-Filing of Income Tax Return or Forms and other value added services & Intimation, Rectification, Refund and other Income Tax Processing Related Queries.
<br/><br/>
08:00 hrs - 20:00 hrs (Monday to Friday)
<br/>
09:00 hrs - 18:00 hrs (Saturday's)</p><hr/>
<a><LuPhoneCall/>&nbsp;&nbsp;1800 103 0025</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a><LuPhoneCall/>&nbsp;+91-80-46122000</a><br/>
<a><LuPhoneCall/>&nbsp;&nbsp;1800 419 0025</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a><LuPhoneCall/>&nbsp;+91-80-61464700</a><br/>
            
        </div>
        <div className='bo2'>
            <h3>Tax Information Network - NSDL</h3>
            <p>Queries related to PAN & TAN application for Issuance / Update through NSDL</p>
            <p>07:00 hrs - 23:00 hrs (All Days)</p><br/><hr/><br/>
            <a><LuPhoneCall/>&nbsp;
+91-20-27218080</a><br/>


        </div>
        <div className='bo3'>
            <h3>Demand Management - Tax Payer Demand Facilitation Center</h3>
            <p>Facilitation for resolution of Outstanding tax demand<br/>

08:00 hrs - 20:00 hrs (Monday to Saturday) – Except National Holidays<br/>

<AiOutlineMail/>&nbsp;Email: <Link>taxdemand@cpc.incometax.gov.in</Link></p><hr/>
<p>Inbound numbers (Taxpayers  can  call  the  toll-free  numbers  below)</p>
<p><LuPhoneCall/>&nbsp;1800 309 0130
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<LuPhoneCall/>+91-80-61464700</p><br/>
        </div>
        <div className='bo4'>
            <h3>TDS Reconciliation Analysis and Correction Enabling System (TRACES)</h3>
            <p>Form 16, Tax Credit (Form 26AS) and other queries related to TDS statement, Form 15CA processing.<br/><br/>10:00 hrs - 18:00 hrs (Monday to Saturday)</p><hr/>
            <a><LuPhoneCall/>&nbsp;1800 103 0344</a>
            <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<LuPhoneCall/>&nbsp;+91-120-4814600</a><br/>

        </div>

      </div>
      <br/>
      <div className='feedback_form'>
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
        <label>Employee Name:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
          required
            type="text"
            id="name"
            name="name"
            onChange={handlename}
            /><br/><br/>
        <label>Employee Email:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
          required
            type="text"
            id="email"
            name="email"
            onChange={handleemail}
            /><br/><br/>
        <label>Any other Comments:</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
          required
            type='textarea'
            id="message"
            name="message"
            onChange={handledes}
            />
            <br/><br/>
      <button style={{float:"center"}}>Submit</button>
            </form>
      </div>
      <Footer/>
    </div>
  )
}
