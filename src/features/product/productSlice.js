import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'

const initialState = {
  products: [],
  SingleProduct: {},
  nbHits: '',
  isLoading: true,
  afterDeleteFetchProduct: false,
}
// Get All products -> [AllProducts] [App]

export const productThunk = createAsyncThunk(
  'product/productThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('products/static')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

// delete Image And Product  -> [AllProduct]

export const deleteImageAndProductThunk = createAsyncThunk(
  'product/deleteImageAndProductThunk',
  async (product, thunkAPI) => {
    try {
      const response = await customFetch.delete('products/', { data: product })

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// update Image And Product  -> [AllProduct]

export const updateImageAndProductThunk = createAsyncThunk(
  'product/updateImageAndProductThunk',
  async (product, thunkAPI) => {
    try {
      // const response = await customFetch.patch('products/', product)
      // return response.data
      console.log(product)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
    getSingleProduct: (state, { payload }) => {
      state.SingleProduct = payload
      console.log(payload)
    },
  },
  extraReducers: {
    // Get All product //
    [productThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [productThunk.fulfilled]: (state, { payload }) => {
      const { nbHits, products } = payload
      state.products = products
      state.nbHits = nbHits
      state.isLoading = false
    },
    [productThunk.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
    // Delete Image And Product //

    [deleteImageAndProductThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [deleteImageAndProductThunk.fulfilled]: (state, { payload }) => {
      // invoke -> [AllProducts] -> useEffect Dependency
      state.afterDeleteFetchProduct = !state.afterDeleteFetchProduct
      state.isLoading = false
    },
    [deleteImageAndProductThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
    // update Image And Product //

    [updateImageAndProductThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [updateImageAndProductThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
    },
    [updateImageAndProductThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
  },
})
export const { createFunction, getSingleProduct } = productSlice.actions
export default productSlice.reducer
