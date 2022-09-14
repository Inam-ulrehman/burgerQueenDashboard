import React from 'react'
import {
  CashOrders,
  Contact,
  OnlineOrders,
  Users,
  Products,
} from '../components'

const LandingPage = () => {
  return (
    <div>
      <Contact />
      <CashOrders />
      <OnlineOrders />
      <Products />
      <Users />
    </div>
  )
}

export default LandingPage
