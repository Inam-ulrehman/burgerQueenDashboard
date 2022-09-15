import { React } from 'react'
import { useSelector } from 'react-redux'
import CashOrdersBasic from '../components/CashOrdersBasic'
import { formatDate } from '../utils/helper'
const CashOrders = () => {
  const { cashorders, isLoading } = useSelector((state) => state)

  if (isLoading) {
    return <div className='loading'></div>
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
                    style={{ width: '200px' }}
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
