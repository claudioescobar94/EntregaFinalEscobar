import React from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {CartItem} from "../CartItem/CartItem";
import { useContext } from 'react';
import './Cart.css'


export const Cart = () => {
    const {cart, clearCart, total, totalQuantity } = useContext(CartContext)

   

    if(totalQuantity === 0){
        return (
            <div className='noItems'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' style={{textDecoration: 'none', backgroundColor: 'green', color: 'white', padding:'10px', borderRadius: '5px'}}>Productos</Link>
            </div>
        )
    }

    return(
        <div className='cart'>
            { cart.map( p=> <CartItem key={p.id} {...p}/>)}
            <h3>Total:${total}</h3>
            <button onClick={()=> clearCart()} className='Buttons'>Limpiar carrito</button>
            <Link to='/' style={{textDecoration: 'none', backgroundColor: 'green', color: 'white', padding:'10px', borderRadius: '5px'}}>Agregar Productos</Link>
            <Link to='/checkout' className='checkout'>Checkout</Link>
        </div>
    )
  
}
