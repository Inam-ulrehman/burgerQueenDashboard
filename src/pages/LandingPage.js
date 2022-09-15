import React from 'react'
import {
  CashOrdersBasic,
  ContactBasic,
  OnlineOrders,
  Products,
  UsersBasic,
} from '../components'

const LandingPage = () => {
  return (
    <div>
      <ContactBasic />
      <UsersBasic />
      <CashOrdersBasic />
      <OnlineOrders />
      <Products />
    </div>
  )
}

export default LandingPage
