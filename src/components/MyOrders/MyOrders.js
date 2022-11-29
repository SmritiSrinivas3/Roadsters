import React from 'react'
import './MyOrders.css'
import MyOrdersCard from './MyOrdersCard';




 function MyOrders() {
  return (
    <div className='myOrdersContainer'>
      <h1> My Orders</h1>
      <hr/>
      <MyOrdersCard/>
    </div>
  )
}

export default MyOrders;
