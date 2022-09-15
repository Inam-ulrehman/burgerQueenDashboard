import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/axios'
import { toast } from 'react-toastify'
const initialState = {
  orders: [],
  count: '',
  isLoading: true,
}
// get onlineorders  //
// Trigger - Roots // SharedLayout
export const onlineordersThunk = createAsyncThunk(
  'onlineorders/onlineordersThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('onlineorders')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const onlineordersSlice = createSlice({
  name: 'onlineorders',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
  },
  extraReducers: {
    [onlineordersThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [onlineordersThunk.fulfilled]: (state, { payload }) => {
      state.orders = payload.stripes
      state.count = payload.count
      state.isLoading = false
    },
    [onlineordersThunk.rejected]: (state, { payload }) => {
      toast.error(`Cash Orders: ${payload}`)
      state.isLoading = false
    },
  },
})
export const { createFunction } = onlineordersSlice.actions
export default onlineordersSlice.reducer
