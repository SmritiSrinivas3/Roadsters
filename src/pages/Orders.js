import React from 'react'
import MyOrders from '../components/MyOrders/MyOrders'
import Sidenav from '../components/Sidenav/Sidenav'
import Topnavbar from '../components/Topnavbar/Topnavbar'
export default function Orders() {
  return (
    <>
    <Topnavbar/>
      <Sidenav/>
      <MyOrders/>
    </>
  )
}
