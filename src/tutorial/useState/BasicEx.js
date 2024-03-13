import React from 'react'
import { useState } from 'react'
const BasicEx = () => {
    const [text,settext]=useState('title 1');
    const clickHandler = ()=>{
        if(text==="title 1")
        settext("title 2");
        else
        settext("title 1");
    }
  return (
    <React.Fragment>   
      <h2>{text}</h2>  
      <button type='button' onClick={clickHandler}>change title</button>
    </React.Fragment>
  )
}

export default BasicEx
