import cart from './cart.svg';
import  "./CartWidget.css";

const CartWidget = ()=>{
    return(
        <div className='cart-widget'>
            <img src = {cart} alt = "cart-widget" />
            0
        </div>
    )
}

export default CartWidget
