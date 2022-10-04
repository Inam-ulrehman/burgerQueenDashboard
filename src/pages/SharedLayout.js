import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { contactThunk } from '../features/contact/contactSlice'
import ResponsiveDrawer from '../components/Navbar/ResponsiveDrawer'
import { userThunk } from '../features/user/userSlice'
import { cashordersThunk } from '../features/cashorders/cashordersSlice'
import { onlineordersThunk } from '../features/onlineorders/onlineordersSlice'
import { productsThunk } from '../features/products/productsSlice'

const SharedLayout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(contactThunk())
    dispatch(userThunk())
    dispatch(cashordersThunk())
    dispatch(onlineordersThunk())
    dispatch(productsThunk())
    // eslint-disable-next-line
  }, [])

  return (
    <main>
      <ResponsiveDrawer />
    </main>
  )
}

export default SharedLayout
