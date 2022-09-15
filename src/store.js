import { configureStore } from '@reduxjs/toolkit'
import cashordersSlice from './features/cashorders/cashordersSlice'
import contactSlice from './features/contact/contactSlice'
import onlineordersSlice from './features/onlineorders/onlineordersSlice'
import productsSlice from './features/products/productsSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    contact: contactSlice,
    cashorders: cashordersSlice,
    onlineorders: onlineordersSlice,
    products: productsSlice,
  },
})

export default store
