import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OnlineOrdersBasic } from '../components'
import { formatDate, formatPrice } from '../utils/helper'
import AlertDialog from '../components/Cards/AlertDialog'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { deleteOnlineOrderThunk } from '../features/onlineorders/onlineordersSlice'
import { Link } from 'react-router-dom'
const OnlineOrders = () => {
  const { onlineorders } = useSelector((state) => state)
  const dispatch = useDispatch()

  if (onlineorders.isLoading) {
    return (
      <div>
        <h1 className='title'>
          <div className='loading'></div>
        </h1>
      </div>
    )
  }
  return (
    <div className='tableHolder'>
      <OnlineOrdersBasic />
      <table>
        <thead>
          <tr>
            <td>Number</td>
            <td>Name</td>
            <td>Order Id</td>
            <td>Created At</td>
            <td>Total Bill</td>
            <td>Payment Status</td>
            <td>Icons</td>
          </tr>
        </thead>
        {onlineorders.orders.map((item, index) => {
          return (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td>{formatPrice(item.total)}</td>
                <td>{item.redirect_status}</td>
                <td className='icons'>
                  <AlertDialog
                    content={'Do you really want to delete ?'}
                    title={'Alert'}
                    buttonText={<DeleteOutlineOutlinedIcon />}
                    action={() => dispatch(deleteOnlineOrderThunk(item._id))}
                  />
                  <Link to={`/onlineorders/${item._id}`}>
                    <EditOutlinedIcon />
                  </Link>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}

export default OnlineOrders
