import React, { useEffect, useState } from 'react'
import './Login.css'
import {Link }from 'react-router-dom'
import { app } from '../Components/Firebase'
import {getAuth,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
const Login=()=>{
    const auth=getAuth(app);
    const[email,setEmail]=useState()
    const [pass,setPass]=useState()
    const [user,setUser]=useState(null)

    const login=()=>{
        signInWithEmailAndPassword(auth,email,pass)
        .then(()=>alert('success'))
        .catch(()=>alert('error'))
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
    })
    console.log(user);

return(
    <>
        <div className='form-body '>
            <div className='form-side-log neon' >
                <h4 id='head-sign'>LOGIN PAGE</h4>
               
                <label>E-Mail</label>
                <input className='insert' onChange={(e)=>setEmail(e.target.value)} type='email'></input>
                <label>Password</label>
                <input className='insert' onChange={(e) => setPass(e.target.value)} type='password'></input>
                <button className='submit-button' onClick={login} >Submit</button>
                <Link to='/Signin'> <h5 className='neon create'>create a new account</h5></Link> 

            </div>
            <div className='img-side-log' >
                <img id='pic-login' alt='...' src='./pics/ice-naruto.jpg' width='100%' height='100%'></img>
            </div>
        </div>
    </>
)}
export default Login;