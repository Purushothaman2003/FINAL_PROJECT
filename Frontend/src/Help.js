import React, { useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Help.css';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import ReactPlayer from 'react-player';


export default function Help() {
    const style = { size: "30px" }
    const playerRef = useRef(null);
    const VIDEO_PATH = 'https://youtu.be/bzGiwXaSMSk';
    const VIDEO_PATH1 = 'https://youtu.be/WChxbBSlWnQ';
    const VIDEO_PATH2 = 'https://youtu.be/K4cx_Cwvf0k';
    return (
        <div className='help_main'>
           <Navbar/>
            <h2>How can we help you?</h2>
            <div className='help_head'>
                <h3>Looking for something else?</h3>
                <a href='#'>View All Topics<IoIosArrowRoundForward style={style} /></a>
            <br/><br/><br/><br/>
                <h3>Popular How to do</h3><br/>
                <div className='whole_vid'>
                <div className='vid1'>
                <ReactPlayer ref={playerRef} 
                url={VIDEO_PATH} 
                controls={true} 
                width={250}
                height={140} />
              <a href='https://youtu.be/bzGiwXaSMSk' target="_blank"><br/>Calculating HRA(House Rent Allowances)<LiaExternalLinkAltSolid/></a><br/>
              </div><br/><br/>
                <div className='vid2'>
                <ReactPlayer ref={playerRef} 
                url={VIDEO_PATH1} 
                controls={true} 
                width={250}
                height={140} />
              <a href='https://youtu.be/WChxbBSlWnQ' target="_blank"> <br/> What is Your Salary Expectations<LiaExternalLinkAltSolid/></a>
              </div>
                <div className='vid3'>
                <ReactPlayer ref={playerRef} 
                url={VIDEO_PATH2} 
                controls={true} 
                width={250}
                height={140} />
              <a href='https://youtu.be/K4cx_Cwvf0k' target="_blank"> <br/> ITR filling online <LiaExternalLinkAltSolid/></a>
              </div>
              </div><br/><br/><br/><hr/>
              <div className='top'>
                <h3>Popular Topics</h3>
                <pre>
                   <a href="https://youtu.be/haHPam3TKC4"  target="_blank">* Generate Static Password</a><br/><br/>
                    <a href="https://youtu.be/qGzxrbwwMyQ" target='_blank'>* How to  calculate TDS</a><br/><br/>
                    <a href="https://youtu.be/wqgolqWHhWk" target='_blank'>* How to fill Form 16A</a><br/><br/>
                   <a href='https://youtu.be/t_cB7-6GQ3c' target='_blank'>* FAQ</a> 
                </pre>
                </div>
            </div>
            
           

            <Footer />
        </div>
    )
}
