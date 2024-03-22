import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='sec5'>
        <h1 className='colorful'> Contact Me :</h1>
        <div className='contact-box'>
           
                <form  className='cont-area' action='https://formspree.io/f/xnqeqnad' method='post'>
                <span className='enter-field'>
                    <label>First Name</label><br></br>
                    <input name='firstname' placeholder='Enter your firstname' ></input>
                </span>
                <span className='enter-field'>
                    <label>Last Name</label><br></br>
                    <input name='lastname' placeholder='Enter your lastname'></input>
                </span>
                <span className='enter-field'>
                    <label>E-mail</label><br></br>
                    <input name='email' placeholder='Enter your email'></input>
                </span>
                <span className='enter-field'>
                    <label>Phone-No.</label><br></br>
                    <input name='phn-no.' placeholder='Enter your number'></input>
                </span>
                <span className='enter-field'>
                    <label>Your Query</label><br></br>
                    <textarea name='message' placeholder='Enter your query'></textarea>
                </span>
                <span className='enter-field for-btn'><button type='submit' className='sb-btn'>Submit</button></span>
                </form>
            
        </div>
    </div>
  )
}

export default Contact