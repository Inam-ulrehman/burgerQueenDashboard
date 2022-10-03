import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import AlertDialog from '../components/Cards/AlertDialog'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import {
  deleteCashOrderThunk,
  GetSingleCashOrderThunk,
} from '../features/cashorders/cashordersSlice'
import { formatDate, formatPrice } from '../utils/helper'

const SingleCashOrder = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { SingleCashOrder, isLoading } = useSelector(
    (state) => state.cashorders
  )
  let total = 0
  SingleCashOrder.payCash?.forEach((item) => {
    total += (item.price / 100) * item.total
  })
  useEffect(() => {
    dispatch(GetSingleCashOrderThunk(id))
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
      <div className='box1'>
        <h3 className='title'>Order holder details</h3>
        <AlertDialog
          content={'Do you really want to delete ?'}
          title={'Alert'}
          buttonText={<DeleteOutlineOutlinedIcon />}
          action={() => dispatch(deleteCashOrderThunk(id))}
        />
        <Link to={'/cashorders'}>CashOrders</Link>
        <div>
          <table>
            <thead>
              <tr>
                <th>_id</th>
                <th>name</th>
                <th>createdAt</th>
                <th>updatedAt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{SingleCashOrder._id}</td>
                <td>{SingleCashOrder.name}</td>
                <td>{formatDate(SingleCashOrder.createdAt)}</td>
                <td>{formatDate(SingleCashOrder.updatedAt)}</td>
              </tr>
            </tbody>
          </table>
          {SingleCashOrder.payCash?.map((item, index) => {
            return (
              <div className='box-2' key={index}>
                <table>
                  <thead>
                    <tr>
                      <th>image</th>
                      <th>Name</th>
                      <th>price</th>
                      <th>Count</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          style={{ maxWidth: '100px' }}
                          src={item.image}
                          alt=''
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{formatPrice(item.price)}</td>
                      <td>{item.total}</td>
                      <td>{((item.price / 100) * item.total).toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      </div>
      <div className='box3'>
        <h3>Total bill</h3>
        <h3>${total.toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default SingleCashOrder
