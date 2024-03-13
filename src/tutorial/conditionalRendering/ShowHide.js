import React from 'react'
import { useState,useEffect } from 'react';
const ShowHide = () => {
    const[show,SetShow]=useState(false);
  return (
    <>
      <button onClick={()=>{SetShow(!show)}}>Show/hide</button>
      {show && <Item/>}
    </>
  )
}
const Item=()=>{
    const[size,setSize]=useState(window.innerWidth);
    const checkSize=()=>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize",checkSize);
        return ()=>{
            window.removeEventListener("resize",checkSize);
        }
    })
    return(
        <>
        <h2>Window Size: </h2>
        <h2>{size}</h2>
        </>
    )
}

export default ShowHide
