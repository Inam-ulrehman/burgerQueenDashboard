import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleOnlineOrderThunk } from '../features/onlineorders/onlineordersSlice'

const SingleOnlineOrder = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.onlineorders)

  useEffect(() => {
    dispatch(getSingleOnlineOrderThunk())
  }, [])
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return <div>SingleOnlineOrder</div>
}

export default SingleOnlineOrder
