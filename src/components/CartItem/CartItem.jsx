import React from 'react';

export const CartItem = ({ id, name, quantity, price }) => {
  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Precio unitario: ${price}</p>
      <p>Precio total: ${price * quantity}</p>
    </div>
  );
};