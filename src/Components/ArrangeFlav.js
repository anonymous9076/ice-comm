import React from "react";
import './ArrangeFlav.css'

let newarr = []
const ArrangeFlav = (props) => {
    const { array, del } = props
    
        if (array) {
            newarr.push(array) }
            // func(newarr)
    
    if (del) {
        newarr = []
    }
    //when we use spread operator then it will became a object so the whole props become object if 
    //you pass it directly as prop
    return (
        <>
            {newarr.map((flav,index) =>
                <div className="itemdiv">
                    <div className="forname "> <b>{index+1} ➱ </b>
                        <img className="item-img" alt="Error 404" src={`./pics/${flav.id}.jpg`} />
                        {flav.name}</div>
                    <div className="forprice">Rs-{flav.price}</div>
                </div>)
            }
        </>
    )
}

export default ArrangeFlav;