import React from 'react'
import {useFetch} from './UseFetch'
import { useState,useEffect } from 'react'
const url='https://course-api.com/javascript-store-products';
const CustomHooks = () => {
    const{loading,products}= useFetch(url);
  return (
    <div>
      {loading? 'Loading...':'data'}
    </div>
  )
}

export default CustomHooks
