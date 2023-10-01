import './Signin.css'
import { app } from '../Components/Firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Signin = () => {
    const auth = getAuth(app);
    const google = new GoogleAuthProvider()
    const database = getDatabase(app)
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [name, setName] = useState()
    const navigate = useNavigate()

   
    console.log(name)

    const newUser = () => {
        if (name) {
            createUserWithEmailAndPassword(auth, email, pass)
                .then(() => alert('New User Created'));
            navigate('/Login');
        }
        else {
            alert('fill details properly')
        }
    }

    const withGoogle = () => {
        signInWithPopup(auth, google)
            .then(() => 
            alert('User created successfully')
            )
            navigate('/Login')
            .catch(() => alert('Something went wrong'))

    }
    if (name && email) {
        set(ref(database, 'user'),
            {
                name: name,
            });

    }

    return (
        <>
            <div className='form-body'>
                <div className='img-side' >
                    <img id='pic-signin' alt='...' src='./pics/ice-naruto.jpg' width='100%' height='100%'></img>
                </div>

                <div className='form-side neon' >
                    <h4 id='head-sign'>SIGN IN PAGE</h4>
                    <label>First-Name</label>
                    <input className='insert' onChange={(e) => setName(e.target.value)} type='text'></input>
                    <label>E-Mail</label>
                    <input className='insert' onChange={(e) => setEmail(e.target.value)} type='email'></input>
                    <label>Password</label>
                    <input className='insert' onChange={(e) => setPass(e.target.value)} type='password'></input>
                    <button className='submit-button'

                        onClick={newUser}
                    >Submit</button>


                    <h3 className='google ' onClick={withGoogle}>sign in with google</h3>
                </div>


            </div>
        </>
    );
}
export default Signin;