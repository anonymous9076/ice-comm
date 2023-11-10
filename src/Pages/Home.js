import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='main-body'>
      <img className="paraimg" alt=' no img' src="./pics/ice-naruto.jpg" />
      <h1 className='neon'>Best Cure for Anxiety</h1>
      <h5 className='neon'>(with ice cream)</h5>

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