import React from 'react'
import './Footer1.css'
import { Link } from 'react-router-dom';
import { FaInstagram,FaGithub,FaGlobe,FaLinkedin } from "react-icons/fa";
const Footer1 = () => {
    return (
        <div className='totaldiv '>
            <div className='socialdiv'>
            </div>
                <div >
                  <b className='join neon'>Follow Us</b>  
                  <Link to='/' className='link'>
                  <FaInstagram className='social'></FaInstagram>
                  </Link>
                  <Link to='/' className='link'>
                    <FaGithub className='social'></FaGithub>
                  </Link>
                  <Link to='/' className='link'>
                    <FaGlobe className='social' ></FaGlobe>
                  </Link>
                  <Link to='/' className='link'>
                    <FaLinkedin className='social' ></FaLinkedin>
                  </Link>
                </div>
              
                <div className='supportdiv'>
                <div >
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>24/7 support</li>
                        <li>Legal Policy</li>
                        <li>No Fraud</li>

                    </ul>
                    
               
                </div>

            </div>
        </div>
    )
}
export default Footer1;