import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { id, productname, price, productimage} = props.data;
    const { cartItems, addToCart, removeToCart, updateCartItemCount } = useContext(ShopContext)


  return (
    <div className='cartItem'>
        <img src= { productimage } />
        <div className='description'>
            <p>
                <b> {productname} </b>
            </p>
            <p>₹{ price }</p>
            <div className='countHandler'>
                <button onClick={() => removeToCart(id)} > - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value) ,id)}/>
                <button onClick={() => addToCart(id)} > + </button>
            </div>
        </div>
    </div>
  )
}
