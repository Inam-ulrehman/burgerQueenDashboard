import React from 'react'
import { useSelector } from 'react-redux'
import { OnlineOrdersBasic } from '../components'
import { formatDate, formatPrice } from '../utils/helper'
const OnlineOrders = () => {
  const { onlineorders } = useSelector((state) => state)
  return (
    <div>
      <OnlineOrdersBasic />
      <hr />
      {onlineorders.orders.map((item) => {
        return (
          <div key={item._id}>
            <p>Created At: {formatDate(item.createdAt)}</p>
            <p>Name: {item.name}</p>
            <p>Total: {formatPrice(item.total)}</p>
            {item.cart.map((order) => {
              return (
                <div key={order._id}>
                  <span style={{ display: 'block' }}>
                    Category: {order.category}
                  </span>
                  <span>Name: {order.name}</span>
                  <div>
                    <img
                      style={{ width: '300px' }}
                      src={order.image}
                      alt='burger'
                    />
                  </div>
                  <p
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>price: {formatPrice(order.price)}</span>
                    <span>Amount: {order.total}</span>
                  </p>
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

export default OnlineOrders
