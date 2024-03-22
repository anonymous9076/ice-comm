import React,{useState,useEffect} from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import { app } from '../Components/Firebase'
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth'

const Home = () => {
  const auth = getAuth(app)
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    });
  }, [auth])
  return (
    <div className='main-body'>
     <div className='home-sec1'>
      <div className='home-left'>
        <h2>Best Care For<br></br> Anxiety</h2>
        <p>"Indulge in Serenity: Soothe Your Soul with Every Scoop!"</p>
        <form className="d-flex btn-container " role="search">
              {user ?
                <>
                  <h2 className="for-user neon ">Hi Buddy</h2>
                  <button className="btn logbtn" onClick={() => signOut(auth)}>Log out</button>
                </>
                : <>
                  <Link to="/Login" > <button className="btn logbtn">Log in</button></Link>
                  <Link to="/Signin" ><button className="btn logbtn">Sign in</button></Link>
                </>}
            </form>
      </div>

      <div className='home-right'>
        <img id='home-img' src='./pics/home.jpg' alt='...'></img>
      </div>

     </div>

      <div className="ice-container" >

        <div className='first-item'>
        <div className='item-descp'>
            <h1 className='neon'>Cup-Cream</h1>
            <p > Cup ice cream offers a delightful serving of frozen goodness neatly nestled within a container. Its smooth texture and wide range of flavors make it a versatile treat. Ideal for those who prefer a mess-free experience. </p>
          </div>
              <img title='click me' className='cont-img' alt='...' src='./pics/cup.png'></img>
            <Link to='/cupflavour'>
                <button className='try-btn' type='submit'>Try me !</button>
            </Link>
          </div>

         

        <div className='sec-item'>
        <div className='item-descp'>
            <h1 className='neon'>Cone-Cream</h1>
            <p >Cone ice cream combines the joy of ice cream with the crunch of a cone, creating a harmonious blend of textures. The crispy cone complements the creamy ice cream, making each bite a delightful contrast.</p>
          </div>
              <img title='click me' className='cont-img' alt='...' src='./pics/cone.png'></img>
            <Link to="/coneflavour">
            <button className='try-btn' type='submit'>Try me !</button>
            </Link>
          </div>
          
      </div>

        <div className='intro'>
          <p >In a world that often feels chaotic and overwhelming, finding solace in simple pleasures can make a world of difference. One such pleasure that has brought comfort to many is the creamy, delectable treat known as ice cream. While it may seem unusual to associate a frozen dessert with anxiety relief, there are several reasons why ice cream can be considered one of the best cures for anxiety. So, grab a spoon and join us on a delightful journey that explores the unique connection between ice cream and calming the anxious mind.</p>
        </div>

    </div >
  )
}

export default Home;