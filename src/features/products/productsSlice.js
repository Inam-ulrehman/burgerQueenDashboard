import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'

const initialState = {
  productsList: [],
  count: '',
  isLoading: true,
}
// get contact customers //
// Trigger - Roots // SharedLayout
export const productsThunk = createAsyncThunk(
  'products/productsThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('products/static')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

// ===Delete Product===
export const deleteProductThunk = createAsyncThunk(
  'products/deleteProductThunk',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.delete(`products/${id}`)

      thunkAPI.dispatch(productsThunk())

      return response.data.msg
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
  },
  extraReducers: {
    [productsThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [productsThunk.fulfilled]: (state, { payload }) => {
      state.productsList = payload.products
      state.count = payload.nbHits
      state.isLoading = false
    },
    [productsThunk.rejected]: (state, { payload }) => {
      toast.error(`products : ${payload}`)
      state.isLoading = false
    },
    // ====delete Product=====
    [deleteProductThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [deleteProductThunk.fulfilled]: (state, { payload }) => {
      toast.success(payload)
      state.isLoading = false
    },
    [deleteProductThunk.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
  },
})
export const { createFunction } = productSlice.actions
export default productSlice.reducer
