import React from 'react';
import './CartItem.css'

export const CartItem = ({ id, name, quantity, price }) => {
  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <p className='quantity'>Cantidad: {quantity}</p>
      <p className='price'>Precio unitario: ${price}</p>
      <p className='total'>Precio total: ${price * quantity}</p>
    </div>
  );
};