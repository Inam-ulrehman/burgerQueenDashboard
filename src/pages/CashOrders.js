import { React } from 'react'
import { useSelector } from 'react-redux'
import CashOrdersBasic from '../components/CashOrdersBasic'
import { formatDate } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
const CashOrders = () => {
  const { cashorders, isLoading } = useSelector((state) => state)

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
  if (isLoading) {
    return <div className='loading'></div>
  }
  return (
    <div className='tableHolder'>
      <CashOrdersBasic />
      <hr />
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Order Id</th>
            <th>Created At</th>
            <th>Total Bill</th>
            <th>Icons</th>
          </tr>
        </thead>
        {cashorders.cashOrders.map((item, index) => {
          return (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item._id}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td>Pending</td>
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

export default CashOrders

// <div>
//   <CashOrdersBasic />
//   <hr />
//   {cashorders.cashOrders.map((items) => {
//     return (
//       <div key={items._id}>
//         <p className='title'>{formatDate(items.createdAt)}</p>
//         <p>Name: {items.name}</p>
//         {items.payCash.map((order) => {
//           return (
//             <div key={order._id}>
//               <p>Category: {order.category}</p>
//               <p>Name: {order.name}</p>
//               <p>Price: {order.price}</p>
//               <p>Total Item: {order.total}</p>
//               <img
//                 src={order.image}
//                 alt='burger'
//                 style={{ width: '200px' }}
//               />
//             </div>
//           )
//         })}
//         <hr />
//       </div>
//     )
//   })}
// </div>
