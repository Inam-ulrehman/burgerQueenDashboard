import React from 'react'
import { useSelector } from 'react-redux'
import { OnlineOrdersBasic } from '../components'
import { formatDate, formatPrice } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
const OnlineOrders = () => {
  const { onlineorders } = useSelector((state) => state)

  const handleEdit = (e) => {
    console.log(e.target)
    console.log('Edit')
  }
  const handleDelete = (e) => {
    console.log(e.target)
    console.log('Delete')
  }
  const handleRead = (e) => {
    console.log(e.target)
    console.log('Read')
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
                  <EditOutlinedIcon onClick={(e) => handleEdit(e)} />
                  <DeleteOutlineOutlinedIcon onClick={(e) => handleDelete(e)} />
                  <InfoOutlinedIcon onClick={(e) => handleRead(e)} />
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
