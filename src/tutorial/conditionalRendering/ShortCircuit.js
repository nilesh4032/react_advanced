import React from 'react'

const ShortCircuit = () => {
    const[text,setText]=React.useState('');
    const [isErr,setIsErr] = React.useState(false);
    // const firstValue =text||'hello world';
    // const secondValue =text&&'hello world';
  return (
    <>
      <h3>{text|| 'WW'}</h3>
      <button onClick={()=>{setIsErr(!isErr)}}>toggle</button>
      {isErr && <h3>Error..</h3>}
      {isErr ? <h2>There is  error</h2>:<h2>All is well</h2>}
    </>
  )
}

export default ShortCircuit
