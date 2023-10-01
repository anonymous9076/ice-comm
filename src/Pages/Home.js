import React from 'react'
import "./Home.css"
import Like from '../Components/Like'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='main-body'>
      <h1 className='neon'>Best Cure for Anxiety</h1>
      <h5 className='neon'>(with ice cream)</h5>

      <div className="ice-container my-4" >
          <div className='first-item'>
            <div className='cont-img-like'>
        <Link to='/cupflavour'>
              <img title='click me' className='cont-img'alt='...' src='./pics/cup.png'></img>
        </Link>
              <div className="textbody my-2">
                <p className="card-text"> <Like></Like></p>
              </div>
            </div>
            <div className='item-descp'>
              <h1 className='neon'>Cup-Cream</h1>
              <p > Cup ice cream offers a delightful serving of frozen goodness neatly nestled within a container. Its smooth texture and wide range of flavors make it a versatile treat. Ideal for those who prefer a mess-free experience. </p>
            </div>
          </div>

          <div className='sec-item'>
            <div className='cont-img-like'>
        <Link to="/coneflavour">
              <img title='click me' className='cont-img' alt='...' src='./pics/cone.png'></img>
        </Link>
              <div className="textbody my-2">
                <p className="card-text"> <Like></Like></p>
              </div>
            </div>
            <div className='item-descp'>
              <h1 className='neon'>Cone-Cream</h1>
              <p >Cone ice cream combines the joy of ice cream with the crunch of a cone, creating a harmonious blend of textures. The crispy cone complements the creamy ice cream, making each bite a delightful contrast.</p>
            </div>
          </div>

      </div>

      <div className='info'>
        <span className='intro'>
          <h1 className='neon'>Introduction</h1>
          <p >In a world that often feels chaotic and overwhelming, finding solace in simple pleasures can make a world of difference. One such pleasure that has brought comfort to many is the creamy, delectable treat known as ice cream. While it may seem unusual to associate a frozen dessert with anxiety relief, there are several reasons why ice cream can be considered one of the best cures for anxiety. So, grab a spoon and join us on a delightful journey that explores the unique connection between ice cream and calming the anxious mind.</p>
        </span>
        <span className='pic'>
          <img className="paraimg" alt=' no img' src="./pics/ice-naruto.jpg" />
        </span>

      </div>

    </div>
  )
}

export default About;