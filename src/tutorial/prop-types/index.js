import React from 'react'
import Products from './Products'
import { useFetch } from '../custom-hooks/UseFetch';
const url='https://course-api.com/javascript-store-products';
const Index = () => {
 const{products}=useFetch(url);
  return (
    <>
      {
        products.map((product)=>{
            const{fields}=product;
        // console.log(fields.name)
            return <Products key={product.id} {...fields}/>
        })
      }
      </>
  )
}

export default Index
