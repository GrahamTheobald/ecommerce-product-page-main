import React from 'react'

export default function Quantity({quantity}) {
  return (
    <div class_name="quantity">
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
