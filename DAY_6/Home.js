import { Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import Footer from './Footer';
import { AiOutlineGlobal } from 'react-icons/ai';
import { MdOutlinePayment } from 'react-icons/md';
import { FaCalculator } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TbListDetails } from 'react-icons/tb';
import { SlCalender } from 'react-icons/sl';
import { LuLink2 } from 'react-icons/lu';
import { MdDomainVerification } from 'react-icons/md';
import { FaFileDownload } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { MdPayments } from 'react-icons/md';




import './Home.css';
import Navbar from './Navbar';
export default function Home() {
   const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: require('.//images/img1.png')
    },
    {
      url: require('.//images/img2.png')

    },
    {
      url: require('.//images/img3.png')
    },

  ];
  const style = { color: "blue" }


  return (
    <div>
      
     <Navbar/>

      <div className='sliderss'>
        <SimpleImageSlider
          width={1045}
          height={555}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay={5}
        />
      </div>



      <div class="sidebar">
        <div className='quicklinks'>
          <h2>Quick Links</h2>
        </div>
        <a href="#home"> <AiOutlineGlobal style={style} /> Income Tax Return(ITR) Status</a><hr />
        <a href="#services"> <MdOutlinePayment style={style} /> e-pay Tax</a><hr />
        <a href="#clients"><RiSecurePaymentLine style={style} /> Know Tax Payment Status</a><hr />
        <a href="#contact"><FaCalculator style={style} /> Income Tax Calculator </a><hr />
        <a href="#contact"><TbListDetails style={style} /> Know TAN Details </a><hr />
        <a href="#contact"><SlCalender style={style} /> Tax Calender </a><hr />
        <a href="#contact"><LuLink2 style={style} /> Link Aadhaar </a><hr />
        <a href="#contact"><MdDomainVerification style={style} /> Verify Your PAN </a><hr />
        <a href="#contact"><MdPayments style={style} /> Instant E-PAN </a><hr />
        <a href="#contact"><GiTakeMyMoney style={style} /> Know Your Refund Status </a><hr />
        <a href="#contact"><FaFileDownload style={style} /> Download CSI File </a>
      </div>

      <Footer />
    </div>

  )
}
