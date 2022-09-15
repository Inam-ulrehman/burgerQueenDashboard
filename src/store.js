import { configureStore } from '@reduxjs/toolkit'
import cashordersSlice from './features/cashorders/cashordersSlice'
import contactSlice from './features/contact/contactSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    contact: contactSlice,
    cashorders: cashordersSlice,
  },
})

export default store
