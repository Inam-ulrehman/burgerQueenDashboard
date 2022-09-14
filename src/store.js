import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './features/contact/contactSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    contact: contactSlice,
  },
})

export default store
