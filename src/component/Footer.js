import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className="footer-bg">
   <div className="container pt-4">
   <div className="border-top border-warning ">
    </div>
   
    <footer className='d-flex justify-content-between py-4'>
       <h1 style={{fontFamily:'Akira Expanded'}}>TOMKRU</h1> 
       <div className='text-center'>
       <span className='copyright' style={{color:'#FAFF00'}}>Responsible Gaming   | <Link to='/about' style={{color:'#FAFF00'}}>About Us</Link>   |</span>
       <p className='copyright'>© 2023 MCW Copyrights. All Rights Reserved</p>
       </div>
    </footer> 
   </div>
    </div>
    </>
  );
}

export default Footer;
