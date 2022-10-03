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

// ===Delete OnlineOrder===
export const deleteOnlineOrderThunk = createAsyncThunk(
  'onlineorders/deleteOnlineOrderThunk',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.delete(`onlineorders/${id}`)

      thunkAPI.dispatch(onlineordersThunk())
      console.log(response)
      return response.data.msg
    } catch (error) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
// ===Get Single OnlineOrder===
export const getSingleOnlineOrderThunk = createAsyncThunk(
  'onlineorders/getSingleOnlineOrderThunk',
  async (id, thunkAPI) => {
    try {
      console.log('thunkApi')
      // const response = await customFetch.get(`onlineorders/${id}`)

      // console.log(response)
      // return response.data.msg
    } catch (error) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data.msg)
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
      state.orders = payload.allOnlineOrders
      state.count = payload.count
      state.isLoading = false
    },
    [onlineordersThunk.rejected]: (state, { payload }) => {
      toast.error(`Cash Orders: ${payload}`)
      state.isLoading = false
    },
    // ====delete OnlineOrder=====
    [deleteOnlineOrderThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [deleteOnlineOrderThunk.fulfilled]: (state, { payload }) => {
      toast.success(payload)
      state.isLoading = false
    },
    [deleteOnlineOrderThunk.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
    // ====get Single OnlineOrder=====
    [getSingleOnlineOrderThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getSingleOnlineOrderThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
    },
    [getSingleOnlineOrderThunk.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
  },
})
export const { createFunction } = onlineordersSlice.actions
export default onlineordersSlice.reducer
