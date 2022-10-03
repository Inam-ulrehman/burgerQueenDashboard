import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleProductThunk } from '../features/products/productsSlice'

const SingleProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.products)
  console.log(isLoading)
  useEffect(() => {
    dispatch(getSingleProductThunk(id))
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return (
      <div>
        <h1 className='title'>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return <div>SingleProduct</div>
}

export default SingleProduct
