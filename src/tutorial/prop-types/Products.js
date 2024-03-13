import React from 'react'
import { useFetch } from '../custom-hooks/UseFetch'
import PropTypes from 'prop-types'
const Products = ({image,name,price}) => {
    //const{product}=products;
    const url=image.map((img)=>{return img.url})
    const validImg=image&&url;
   //console.log(url);
  return (
    <>
    {
        
    }
    <img src={validImg||'deafultImage'} alt="No image found" style={{height:'300px',width:'300px', objectFit:'cover'}} />
     <h3>{name} :${price|| 3.99}</h3>
    </>
  )
}
Products.propTypes={
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}
// Products.defaultProps={
//   name:'deafult name',
//   price:'not available'
// }
export default Products
