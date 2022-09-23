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

// Delete User
export const deleteCashOrderThunk = createAsyncThunk(
  'user/deleteCashOrderThunk',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.delete(`/cashorders/${id}`)

      thunkAPI.dispatch(cashordersThunk())

      return response.data.msg
    } catch (error) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data.msg)
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
    // ====delete CashOrder=====
    [deleteCashOrderThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [deleteCashOrderThunk.fulfilled]: (state, { payload }) => {
      toast.success(payload)
      state.isLoading = false
    },
    [deleteCashOrderThunk.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
  },
})
export const { createFunction } = cashordersSlice.actions
export default cashordersSlice.reducer
