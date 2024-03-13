import React from 'react'
import { useState,useEffect } from 'react'
const UseEffectCleanup = () => {
 
    const[size,setSize]=useState(window.innerWidth);
    console.log(size);
    const checkSize=()=>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',checkSize);
        return ()=>{
            window.removeEventListener('resize',checkSize);
        }
    })
    return (
        <>
        <h1>window</h1>
        <h2>{size}</h2>
        </>

    )
}

export default UseEffectCleanup
