import React, { useContext } from 'react'
import axios from "axios"
import { ShopContext } from '../../context/shop-context';


export const Product = (props) => {
    const {id, productname, price, productimage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]

    const options = {
      method: "GET",
      url: "https://zappos1.p.rapidapi.com/brands/list",
      headers: {
        'X-RapidAPI-Key': 'f1201ccd1cmsh63feeaf0926210ap131999jsna1370d1a71da',
        'X-RapidAPI-Host': 'zappos1.p.rapidapi.com'
      }
    }

    try {
      const response = axios.request(options);
      console.log(response);
    } catch (error) {
      console.logr("ERROR");
    }

  return (
    <div className='product'>
      <img src= {productimage} />
      <div className='discription'>
        <p>
         <b> {productname} </b> 
        </p>
        <p> ₹{price} </p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}


