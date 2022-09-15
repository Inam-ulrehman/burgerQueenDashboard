import React from 'react'
import {
  CashOrdersBasic,
  ContactBasic,
  OnlineOrdersBasic,
  ProductsBasic,
  UsersBasic,
} from '../components'

const LandingPage = () => {
  return (
    <div>
      <ContactBasic />
      <UsersBasic />
      <CashOrdersBasic />
      <OnlineOrdersBasic />
      <ProductsBasic />
    </div>
  )
}

export default LandingPage
