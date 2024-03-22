import React, { useEffect, useState } from 'react'
import './CupFlavour.css'
import Bodyflav from '../Components/Bodyflav'
import ArrangeFlav from '../Components/ArrangeFlav'
import { useNavigate } from 'react-router-dom'
import Database from '../data/Databaseflav'

let tax = 0;
let count = 0;
let total = 0;
let grand = 0;

const ConeFlavour = (props) => {
  let a = '🍦 Cone 🍦 ';

  const [itemdetail, setItemdetail] = useState();
  const [arrobj, setArrobj] = useState();
  const navigate = useNavigate();
  let section = document.getElementById('ideal')


  const senditemdetail = (arrofflav, arrofobj) => {
    if (count < 10) {
      setItemdetail(arrofflav);
      setArrobj(arrofobj)
      section.style.visibility='visible'
    }
    else {
      alert('WOW man you are too GREEDY man calm down!')
    }
    count = count + 1
  }


  useEffect(() => {
    if (itemdetail) {
      total = total + itemdetail.price
      tax = (total * 18) / 100
      grand = tax + total
    }
  }, [itemdetail])


  const handlenavigate = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (itemdetail) {
      props.data(a, total, grand, tax, count)
      alert("our order is being Processed . Here's your Receipt ! ")
      setItemdetail(null)
      navigate("/Receipt")
    }
  }

  useEffect(() => {
    total = 0;
    grand = 0;
    setItemdetail(null)
  }, [])

  return (

    <>
      <p className='select-text '> Cone Ice-Cream </p>
      <div className='flavitem'>
        {
          Database.map((flav) =>
            <Bodyflav
              key={flav.id}
              name={flav.name}
              id={flav.id}
              price={flav.price}
              liftingdata={senditemdetail}>

            </Bodyflav>)
        }
      </div>

      <div id='ideal' className='fixed-list'>
        <div className="first-title neon">
          <h5 style={{ fontSize: '2.5rem' }}>Order</h5>
        </div>
        <div className="sec-container">
          {arrobj ?
            arrobj.map((item) => {
              return (
                <div className='ice-img '>
                  <img id='img' src={`./pics/${item.id}.jpg`} alt='...' />
                </div>
              )
            }) : ''}
        </div>
        <div className="third-btn">
          <button className="buy-btn" onClick={handlenavigate}>Buy</button>

        </div>
      </div>

      <div className="place-order">

        <h6 className="titleorder neon">Your Order</h6>
        <hr></hr>
        <div className="selectedflav">

          {itemdetail ?

            <ArrangeFlav
              array={itemdetail}
            >
            </ArrangeFlav>
            : ''
          }
        </div>
        <button className="buy" onClick={handlenavigate}>Buy </button>
      </div>
    </>

  )
}

export default ConeFlavour;