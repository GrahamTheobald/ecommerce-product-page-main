import React, {useState, useContext} from 'react'
import AddToCart from './AddToCart'
import Quantity from './Quantity'
import data from '../../data.json'
import {IMGS, HandlerContext} from '../App'
import '../../css/info.css'

const usd = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"})

export default function Info() {
  const {handleAdd} = useContext(HandlerContext)
  const [quantity, setQuantity] = useState(0)
  const {
    company,
    title,
    description,
    currentPrice,
    discount,
    previousPrice,
  } = data[0]
  const product = {
    title,
    currentPrice,
    image: IMGS[0].thumbnail
  }
  function handleSetQuantity(n) {
    if (n === 0) setQuantity(n)
    else setQuantity(prev => Math.max(prev + n, 0))
  }

  return (
    <div className="info">
      <h2 className="info__company">{company}</h2>
      <h1 className="info__product-title">{title}</h1>
      <p className="info__description">
        {description}
      </p>
      <div className="info__price">
        <div className="info__price__current">
          <p>{usd.format(currentPrice)}</p>
          <p className="info__price__current__discount">{discount}</p>
        </div>
        <p className="info__price__previous">{usd.format(previousPrice)}</p>
      </div>
      <div className="info__cart-control">
        <Quantity quantity={quantity} handler={handleSetQuantity}/>
        <AddToCart product={product} quantity={quantity} handler={handleAdd} resetQ={handleSetQuantity}/>
      </div>
    </div>
  )
}
