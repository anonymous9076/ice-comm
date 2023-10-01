import React, { useContext } from 'react'
import './Receipt.css'
import ClickContext from '../context/ClickContext'


const Receipt = () => {
    const date = new Date()
    const data=useContext(ClickContext)   
    let newdate = (date.toString()).slice(0, 15)

    let discount=(data.grand*2)/100
    let net=data.grand -discount
    return (
        <div className='main-box'>
            <div className='receipt-box'>
                <h1 className='neon'>B.C.A  Ice-Cream </h1>


                <div className='first'> <b>GST</b>- XXXXXXXXXXXXXX
                    <span className='righted-items'>Dated XX-XX-XXXX</span>
                    <br></br>
                    LIC.NO -XXXXXXXXX
                    <h6 style={{ textAlign: 'center', fontSize: '1.5em' }}>Tax Invoice</h6>
                    <p className='line'></p>
                </div>

                <div className='two'>
                    Bill No: XYZ1234
                    <span className='righted-items'>Dated {newdate}</span>
                    <p className='line'></p>
                </div>

                <div className='three'>Item description<br></br>
                    Sell price
                    <span className='centered-items'> Tax</span>

                    <span className='righted-items'> NetValue</span>

                    <p className='line'></p>
                </div>
                <div className='three'><b className='title neon'>{data.name} Ice-Cream </b> with <b>{data.count}</b> Flavour  <br></br>
                   <b> {data.price}</b> -/Rs
                    <span className='centered-items'><b> {data.tax}</b> -/Rs</span>

                    <span className='righted-items'> <b>{data.grand}</b> -/Rs</span>
                <p className='line'></p>
                </div>

                <div className='last'>
                    Discount 2% -<span className='righted-items'> <b>{discount.toPrecision(4)}</b></span>
                    <br></br>
                    NetValue -<span className='righted-items'> <b>{net.toPrecision(4)}</b></span>
                    <br></br>
                    Cash -<span className='righted-items'>--</span>
                    <br></br>
                    Balance -<span className='righted-items'>--</span>
                </div>

                <h5 className='neon' style={{ textAlign: 'center' }}>Thanks for shopping with B.C.A<br></br>And<br></br>Stay Coooool!</h5>
            </div>

           

        </div>
    )

}
export default Receipt