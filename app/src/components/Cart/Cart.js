import React, {useContext} from 'react'
import { CartContext } from '../App'
import CartItem from './CartItem'
import '../../css/cart.css'

export default function Cart({hidden}) {
  const cart = useContext(CartContext)
  console.log(cart)
  return (
      <div className="cart">
        <div className="cart__title">Cart</div>
        <div className="cart__content">
        {
          cart.length ?
          <>
          {cart.map((item, i) => <CartItem key={i} item={item}/>)}
          <button className="button">Checkout</button>
          </>
          :
          <p className='cart__content--empty'>
          Your cart is empty.
          </p>
        }
        </div>
      </div>
  )
}
