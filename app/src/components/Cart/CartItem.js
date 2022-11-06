import React, {useContext} from 'react'
import { HandlerContext } from '../App'

const usd = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"})

export default function CartItem({item}) {
  const {
    title,
    currentPrice,
    image
  } = item.product
  const {handleDelete} = useContext(HandlerContext)
  return (
    <div className="cart__item">
      <div className='cart__item__thumbnail'>
        <img
          src={image}
          alt="product"
        />
      </div>
      <div className='cart__item__info'>
        <p>{title}</p>
        <div>
          {usd.format(currentPrice)} x {item.quantity}
          <span className='cart__item__info--bold'>
            {usd.format(currentPrice * item.quantity)}
          </span>
        </div>
      </div>
      <img
        onClick={() => handleDelete(item)}
        className='cart__item__delete'
        src="./images/icon-delete.svg"
        alt="delete"
      />
    </div>
  )
}
