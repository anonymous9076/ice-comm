import React from 'react'
import './Footer1.css'
import { Link } from 'react-router-dom';
const Footer1 = () => {
    return (
        <div className='totaldiv '>
            <div className='socialdiv'>
            </div>
                <div >
                  <b className='join neon'>Follow Us</b>  
                  <Link to='https://github.com/anonymous9076'>
                  <img  className="social" src='/Pics/github.jpg' alt='' height='30em' width='30em'/>
                  </Link>
                  <Link to='https://www.instagram.com/__tushar__4369/'>
                  <img className="social" src='/Pics/insta.png' alt='' height='30em' width='30em'/>
                  </Link>
                  <Link to='/'>
                  <img className="social" src='/Pics/o face.png' alt='' height='30em' width='30em'/>
                  </Link>
                  <Link to='/'>
                  <img className="social" src='/Pics/linkin.png' alt='' height='30em' width='30em'/>
                  </Link>
                </div>
              
                <div className='supportdiv'>
                <div  style={{ backgroundColor: '#' }}>
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