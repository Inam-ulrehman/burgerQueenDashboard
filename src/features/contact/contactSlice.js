import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'

const initialState = {
  contactUs: [],
  isLoading: true,
  count: '',
}

// get contact customers //
export const contactThunk = createAsyncThunk(
  'contact/contactThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('contactUs')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
  },
  extraReducers: {
    [contactThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [contactThunk.fulfilled]: (state, { payload }) => {
      state.count = payload.count
      state.isLoading = false
    },
    [contactThunk.rejected]: (state, { payload }) => {
      toast.error(`ContactUS: ${payload}`)
      state.isLoading = false
    },
  },
})
export const { createFunction } = contactSlice.actions
export default contactSlice.reducer
