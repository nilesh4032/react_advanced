import React from 'react'

const UseStateCounter = () => {
    const[value,setValue]=React.useState(0);
    const complex=()=>{
      setTimeout(() => {
        
        setValue((prevValue)=>{
          return prevValue+1;
        })
      }, 1500);
    }
  return (
    <>
     <section style={{margin:"4 rem 0",align:"center"}}>
        <h2> Counter</h2>
        <h3>{value}</h3>
        <button type='btn' onClick={()=>{setValue(value+1)}}>increment</button>
        <button type='btn' onClick={()=>{setValue(value-1)}}>decrement</button>
        <button type='btn' onClick={()=>{setValue(0)}}>reset</button>
        </section> 
     <section style={{margin:"4 rem 0",align:"center"}}>
        <h2> Counter</h2>
        <h3>{value}</h3>
        <button type='btn' onClick={()=>{setValue(value+1)}}>increment</button>
        <button type='btn' onClick={()=>{setValue(value-1)}}>decrement</button>
        <button type='btn' onClick={()=>{setValue(0)}}>reset</button>
        <button type='btn' onClick={()=>{complex()}}>complex increase</button>
        </section> 
    </>
  )
}

export default UseStateCounter
