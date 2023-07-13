import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div class="footer">
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
      </div>
    </>
  )
}
