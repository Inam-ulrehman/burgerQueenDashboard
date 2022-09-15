import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'

const initialState = {
  users: [],
  isLoading: true,
  count: '',
}
// get contact customers //
// Trigger - Roots // SharedLayout
export const userThunk = createAsyncThunk(
  'user/userThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('auth/users')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
  },
  extraReducers: {
    [userThunk.pending]: (state, { payload }) => {
      console.log('promise pending')
      state.isLoading = true
    },
    [userThunk.fulfilled]: (state, { payload }) => {
      state.count = payload.count
      state.users = payload.users
      state.isLoading = false
    },
    [userThunk.rejected]: (state, { payload }) => {
      toast.error(`Users : ${payload}`)
      state.isLoading = false
    },
  },
})
export const { createFunction } = userSlice.actions
export default userSlice.reducer
