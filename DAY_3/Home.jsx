import { Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import tax from "..//images/img1.png";
import tax1 from "..//images/img2.png";
import tax2 from "..//images/img3.png";
export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  return (
    <div>
      {/* <div class="navigation"> */}

      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example">
        <Tab value="Active" href="/" label="Home" />
        <Tab value="two" href="/" label="Contact Us" />
        <Tab value="three" href="/Login" label="Login" />
        <Tab value="four" href="/reg" label="Register" />
      </Tabs>
      {/* <div className="bod3">
        <div id="slideshow">
          <div class="slide-wrapper">
            <div class="slide">
              <h1 class="slide-number">
                <img src={tax}  alt="" width="1000rem" heigth="200rem" />
              </h1>
            </div>
            <div class="slide">
              <h1 class="slide-number">
                <img src={tax1} width="100rem" heigth="100rem" />
              </h1>
            </div>
            <div class="slide">
              <h1 class="slide-number">
                <img src={tax2} width="100rem" heigth="100rem" />
              </h1>
            </div>
            
          </div>
        </div>
      </div> */}


      {/* </div> */}
      <br />
      <div class="head">
        <img src={tax} alt='tax' />
<img src={tax1} alt='tax' />
        <img src={tax2} alt='tax' />

      </div>



      {/* <div class="sidebar">
        <a href="#home"><i class="fa-thin fa-calculator"></i> Income Tax Return(ITR) Status</a><hr />
        <a href="#services"><i class="fa fa-fw fa-wrench"></i> e-pay Tax</a><hr />
        <a href="#clients"><i class="fa fa-fw fa-user"></i> Know Tax Payment Status</a><hr />
        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Income Tax Calculator </a><hr />
        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Know TAN Details </a><hr />
        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Tax Calender </a>


             
      </div> */}


      {/* <div class="footer">
        <div class="heading">
         
        </div>
        <div class="content">
          <div class="services">
            <h4>Services</h4>
            <p><a href="#">App development</a></p>
            <p><a href="#">Web development</a></p>
            <p><a href="#">DevOps</a></p>
            <p><a href="#">Web designing</a></p>
          </div>
          <div class="social-media">
            <h4>Follow as on</h4>
            <p>
              <a href="#"
              ><i class="fab fa-linkedin"></i> Linkedin</a
              >
            </p>
            <p>
              <a href="#"
              ><i class="fab fa-twitter"></i> Twitter</a
              >
            </p>
            <p>
              <a href="https://github.com/Purushothaman2003"
              ><i class="fab fa-github"></i> Github</a
              >
            </p>
            
            <p>
              <a href="https://www.facebook.com/codewithfaraz"
              ><i class="fab fa-facebook"></i> Facebook</a
              >
            </p>
            <p>
              <a href="https://instagram.com/the_mass____?igshid=NGExMmI2YTkyZg=="
              ><i class="fab fa-instagram"></i> Instagram</a
              >
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Blogs</a></p>
            <p><a href="#">Contact</a></p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p>
              Address: 67-A, Race Course Rd, Race Course, <br />
              &nbsp; &nbsp; Gopalapuram, Coimbatore, Tamil Nadu 641018
            </p>
            <h4 class="mobile">Mobile</h4>
            <p><a href="#">+91-822013****</a></p>
            <h4 class="mail">Email</h4>
            <p><a href="taxdemand@cpc.incometax.gov.in">taxdemand@cpc.incometax.gov.in</a></p>
          </div>
        </div>
        <footer>
          <hr />
          © Income Tax Department, Ministry of Finance, Government of India. All Rights Reserved..<br />This site is best viewed in 1024 * 768 resolution with latest version of Chrome, Firefox, Safari and Internet Explorer.
        </footer>
      </div> */}
    </div>

  )
}
