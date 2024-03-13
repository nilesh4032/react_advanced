import React from 'react'
import { useEffect } from 'react'
const Modals = ({modalContent,closeModal}) => {
useEffect(()=>{
  setTimeout(() => {
    closeModal();  
  }, 2000);
},[])
  return (
    <>
      <p>{modalContent}</p>
    </>
  )
}

export default Modals
