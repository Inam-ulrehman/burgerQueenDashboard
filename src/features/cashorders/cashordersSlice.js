import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/axios'
import { toast } from 'react-toastify'
const initialState = {
  cashOrders: [],
  count: '',
  isLoading: true,
}
// get cashOrders  //
// Trigger - Roots // SharedLayout
export const cashordersThunk = createAsyncThunk(
  'cashorders/cashordersThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('cashOrders')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const cashordersSlice = createSlice({
  name: 'cashorders',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
  },
  extraReducers: {
    [cashordersThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [cashordersThunk.fulfilled]: (state, { payload }) => {
      state.cashOrders = payload.cashOrders
      state.count = payload.count
      state.isLoading = false
    },
    [cashordersThunk.rejected]: (state, { payload }) => {
      toast.error(`Cash Orders: ${payload}`)
      state.isLoading = false
    },
  },
})
export const { createFunction } = cashordersSlice.actions
export default cashordersSlice.reducer
