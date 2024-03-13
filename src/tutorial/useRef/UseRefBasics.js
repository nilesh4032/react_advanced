import React from 'react'
import { useRef } from 'react';
// does not trigger re-render
//target dom 
const UseRefBasics = () => {
    const refContainer = useRef(null);
    console.log(refContainer);
    const submitHandler=(e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    }
  return (
    <>
     <form onSubmit={submitHandler}>
     <div>
        <input type="text" ref={refContainer}/>
        <button type='submit'>submit</button>
        </div> 
    </form>
    </>
  )
}

export default UseRefBasics
