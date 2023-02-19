import React from 'react';
import { FaFacebookF, FaLinkedin,FaPhoneAlt} from "react-icons/fa"
import { ImLocation } from "react-icons/im";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className='bg-blue-900'>
    
  <div  className="footer  text-white justify-evenly p-10">
  <div className='mt-8 mb-10'>
            <img className='w-24' src="https://i.ibb.co/t85FtjV/Footer-logo.png"/>
            <p className='text-wrap font-bold text-2xl'>THE SUITES.</p>
       
      
         
        
        </div> 
        <div className='mt-8 mb-10 font-semiBold text-2xl'>
          <a class="link link-hover">Home</a> 
          <a class="link link-hover">Room & Suites</a> 
          <a class="link link-hover">Restaurant & Dinning</a> 
          <a class="link link-hover">Weddind & Events</a> 
          <a class="link link-hover">Activities</a> 
        </div> 
        <div className='mt-8 mb-10 font-semiBold text-2xl'>
          <a className='font-bold text-2xl mb-3'>Contact Us</a> 
          <div className="grid grid-flow-col gap-2 ">
          <a><ImLocation></ImLocation></a>
          <p>The Suites Resort,
            <br />
           Srimongol,Moulovibazar -3120,Bangladesh</p>
          </div>
          <br />
          <div className="grid grid-flow-col gap-2 mt-1 mb-2 ">
          <a><FaPhoneAlt></FaPhoneAlt></a>
          <p>+8801755-460159</p>
          </div>
          <br />
          <div className="grid grid-flow-col gap-2  ">
          <a><IoMailSharp></IoMailSharp></a>
          <p >suitesresort@gmail.com</p>
          </div>
      
        </div>
  </div>
   
  <div class="divider divider-accent"></div> 
  <div className='text-center text-xl font-semiBold text-white pb-5'>
    <p>2023 Reservation Office.All Rights Reserved</p>
  </div>
        
      </footer>
    );
};

export default Footer;