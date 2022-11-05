import React from 'react'
import '../../css/quantity.css'

export default function Quantity({quantity, handler}) {
  return (
    <div className="quantity">
      <img 
        onClick={() => handler(1)}
        className="quantity__button"
        src="./images/icon-plus.svg"
        alt="plus"
      />
      <p>{quantity}</p>
      <img 
        onClick={() => handler(-1)}
        className="quantity__button"
        src="./images/icon-minus.svg"
        alt="minus"
      />
    </div>
  )
}
