import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CashOrdersBasic from '../components/CashOrdersBasic'
import { formatDate } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import AlertDialog from '../components/Cards/AlertDialog'
import { deleteCashOrderThunk } from '../features/cashorders/cashordersSlice'
import { Link } from 'react-router-dom'
const CashOrders = () => {
  const dispatch = useDispatch()
  const { cashorders, isLoading } = useSelector((state) => state)

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
                <td className='icons'>
                  <Link to={`/cashorders/${item._id}`}>
                    <EditOutlinedIcon />
                  </Link>
                  <AlertDialog
                    content={'Do you really want to delete ?'}
                    title={'Alert'}
                    buttonText={<DeleteOutlineOutlinedIcon />}
                    action={() => dispatch(deleteCashOrderThunk(item._id))}
                  />
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
