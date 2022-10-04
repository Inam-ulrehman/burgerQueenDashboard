import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getSingleOnlineOrderThunk } from '../features/onlineorders/onlineordersSlice'
import { formatDate, formatPrice } from '../utils/helper'

const SingleOnlineOrder = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, singleOnlineOrder } = useSelector(
    (state) => state.onlineorders
  )

  useEffect(() => {
    dispatch(getSingleOnlineOrderThunk(id))
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <div>
      <Link to={'/onlineorders'}>Back to onlineorders </Link>
      <button className='btn'>Refund the Customer Request</button>
      <div style={{ display: 'flex' }}>
        <h4>Customer Id: </h4>
        <p>{singleOnlineOrder.createdBy}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <h4>Order Id: </h4>

        <p>{singleOnlineOrder._id}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <h4>payment Id: </h4>

        <p>{singleOnlineOrder.payment_intent}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Bill</th>
            <th>PaymentStatus</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{singleOnlineOrder.name}</td>
            <td>{formatPrice(singleOnlineOrder.total)}</td>
            <td>{singleOnlineOrder.redirect_status}</td>
            <td>{formatDate(singleOnlineOrder.createdAt)}</td>
          </tr>
        </tbody>
      </table>
      {/* Order Details */}
      <div>
        {singleOnlineOrder.cart.map((item, index) => {
          return (
            <div key={index}>
              <table>
                <thead>
                  <tr>
                    <th>-</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        style={{ maxWidth: '100px' }}
                        src={item.image}
                        alt='burger'
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SingleOnlineOrder
