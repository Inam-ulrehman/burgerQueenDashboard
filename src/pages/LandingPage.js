import React from 'react'
import styled from 'styled-components'
import {
  CashOrdersBasic,
  ContactBasic,
  OnlineOrdersBasic,
  ProductsBasic,
  UsersBasic,
} from '../components'
import OrdersPieChart from '../components/OrdersPieChart'

const LandingPage = () => {
  return (
    <Wrapper>
      <div className='box-container'>
        <div className='box-1'>
          <OrdersPieChart />
        </div>
        <div className='box-2'>
          <ContactBasic />
          <UsersBasic />
          <CashOrdersBasic />
          <OnlineOrdersBasic />
        </div>
      </div>

      <ProductsBasic />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  /* box-1 css for pie */
  .sc-dkzDqf {
    width: fit-content;
  }
  .box-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 920px) {
    .box-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }
`
export default LandingPage
