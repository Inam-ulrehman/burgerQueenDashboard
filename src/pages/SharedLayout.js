import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { contactThunk } from '../features/contact/contactSlice'
import ResponsiveDrawer from '../components/Navbar/ResponsiveDrawer'

const SharedLayout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(contactThunk())
    // eslint-disable-next-line
  }, [])
  return (
    <main>
      <ResponsiveDrawer />
    </main>
  )
}

export default SharedLayout
