import React from 'react'
import orderDemo from './orderDemo.png'
import './MyOrdersCard.css'

export default function MyOrdersCard() {
  return (
    <div className='myOrdersCardContainer'>
      <img src={orderDemo}></img>
      <div className="containerText">
      <h4>Demo title</h4>
      <h5> Arrives tomorrow</h5>
    </div>
    <div className='buttonsContainer'>
    <button class="buttons" id='trackOrderButton'>Track Order</button>
      <button class="buttons" id='getOrderDetailsButton'>Get Order Details</button>
    </div>
    </div>
  )
}
