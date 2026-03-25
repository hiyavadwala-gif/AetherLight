import React from 'react'
// import {FaWhatsapp,FaPhoneAlt,FaEnvelope,  } form 
import Whatsapp_icon from "../assets/Image/Whatsapp_icon.png"
import Image from 'react-bootstrap/Image';
import Phone_icon from "../assets/Image/Phone.png"
import Email_icon from "../assets/Image/Mail_icon.png"
import Insta_icon from "../assets/Image/Insta_Icon.png"
import 
function Conact() {
  return (
    <>
    <div className='contact'>
      <h2 className='conact-title'> REACH US MON-SAT 10AM TO 9PM</h2>
    </div>

  <div className='contact-grid'>
   
   
    <div className='contact-card'> 

      {/* <FaWhatsapp className ="icon"/> */}
      <h4>WHATSAPP</h4>
    <p>+ 91 6353382370 (H)</p>
    <Image src= {Whatsapp_icon} />
    </div>

    <div className='contact-card'>
      {/* <FaPhoneAlt  className= "icon"/> */}
    <p>+ 91 6353771570 (M)</p>
     <Image src= {Phone_icon} />
    </div>
  </div>

  <div className='contact-card'>
  {/* <FaEnvelope  className= "icon"/> */}
<p>aetherlight025@gmail.com</p>
<Image src= {Email_icon} />
  </div>

  <div className='conact-card'>
  {/* <FaInstagram /> */}
    <p>aether_light_studio</p>
    <Image src= {Insta_icon} />
  </div>
  
      </>
  )
}

export default Conact
