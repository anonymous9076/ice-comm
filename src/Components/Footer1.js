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
