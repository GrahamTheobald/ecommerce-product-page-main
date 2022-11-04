import React from 'react'
import '../../css/quantity.css'

export default function Quantity({quantity}) {
  return (
    <div className="quantity">
      <img 
        className="quantity__button"
        src="./images/icon-plus.svg"
        alt="plus"
      />
      <p>{quantity}</p>
      <img 
        className="quantity__button"
        src="./images/icon-minus.svg"
        alt="minus"
      />
    </div>
  )
}
