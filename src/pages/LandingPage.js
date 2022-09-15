import React from 'react'
import {
  CashOrders,
  ContactBasic,
  OnlineOrders,
  Users,
  Products,
} from '../components'

const LandingPage = () => {
  return (
    <div>
      <ContactBasic />
      <CashOrders />
      <OnlineOrders />
      <Products />
      <Users />
    </div>
  )
}

export default LandingPage
