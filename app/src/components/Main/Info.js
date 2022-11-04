import React, {useState, useContext} from 'react'
import AddToCart from './AddToCart'
import Quantity from './Quantity'
import { ProductContext } from '../App'
import '../../css/info.css'

export default function Info() {
  const [quantity, setQuantity] = useState(0)
  const {
    company,
    title,
    description,
    currentPrice,
    discount,
    previousPrice,
  } = useContext(ProductContext)

  return (
    <div className="info">
      <h2 className="info__company">{company}</h2>
      <h1 className="info__product-title">{title}</h1>
      <p className="info__description">
        {description}
      </p>
      <div className="info__price">
        <div className="info__price__current">
          <p>{currentPrice}</p>
          <p className="info__price__current__discount">{discount}</p>
        </div>
        <p className="info__price__previous">{previousPrice}</p>
      </div>
      <div className="info__cart-control">
        <Quantity quantity={quantity}/>
        <AddToCart/>
      </div>
    </div>
  )
}
