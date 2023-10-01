import React, { useState } from "react"
const Like = () => {
const [like ,setLike]=useState('🤍')
const [count,setCount]=useState(0)
const[text,setText]=useState('like')
const handleLike=()=>{
    
    if(like==='🤍'){
        setLike('❤️')
        setCount(count+1)
        setText('liked')
    }
   if(like==="❤️"&&count!==0){
    setLike('🤍')
    setCount(count-1)
     setText('like')
   }
}

    return (
        <>
        <button className="btn" type="submit" onClick={handleLike}>
                {like} {count} {text}

        </button>
        </>
    )
}

export default Like;