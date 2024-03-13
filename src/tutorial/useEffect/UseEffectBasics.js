import React from 'react'
import { useEffect } from 'react'
const UseEffectBasics = () => {
    const[value,setValue]=React.useState(0);
    useEffect(() =>{
      if(value>=1)
        document.title=`New Title (${value})`;
    },[value])
  return (
    <div>
        <h3>{value}</h3>
      <button onClick={()=>{setValue(value+1)}}>click me</button>
    </div>
  )
}

export default UseEffectBasics
