import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import CashOrdersBasic from '../components/CashOrdersBasic'
import { formatDate } from '../utils/helper'
const CashOrders = () => {
  const { cashorders } = useSelector((state) => state)
  const [show, setShow] = useState(false)
  const handleShow = (e) => {
    console.log(e.target)
    setShow(!show)
  }
  return (
    <div>
      <CashOrdersBasic />
      <hr />
      {cashorders.cashOrders.map((items) => {
        return (
          <div key={items._id}>
            <p className='title'>{formatDate(items.createdAt)}</p>
            <p>Name: {items.name}</p>
            {items.payCash.map((order) => {
              return (
                <div key={order._id}>
                  <p>Category: {order.category}</p>
                  <p>Name: {order.name}</p>
                  <p>Price: {order.price}</p>
                  <p>Total Item: {order.total}</p>
                  <img
                    src={order.image}
                    alt='burger'
                    style={{ width: '300px', height: '300px' }}
                  />
                </div>
              )
            })}
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default CashOrders
