import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'

const initialState = {
  contactUs: [],
  isLoading: true,
  count: '',
}

// get contact customers //
// Trigger - Roots // SharedLayout

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
// ===Delete ContactUs===
export const deleteContactUsThunk = createAsyncThunk(
  'contact/deleteContactUsThunk',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.delete(`/contactus/${id}`)

      thunkAPI.dispatch(contactThunk())
      return response.data.msg
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
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
      state.contactUs = payload.contactUss
      state.isLoading = false
    },
    [contactThunk.rejected]: (state, { payload }) => {
      toast.error(`ContactUS: ${payload}`)
      state.isLoading = false
    },
  },
  // ====Delete contact=====
  [deleteContactUsThunk.pending]: (state, { payload }) => {
    state.isLoading = true
  },
  [deleteContactUsThunk.fulfilled]: (state, { payload }) => {
    toast.success(payload)
    state.isLoading = false
  },
  [deleteContactUsThunk.rejected]: (state, { payload }) => {
    toast.error(payload)
    state.isLoading = false
  },
})
export const { createFunction } = contactSlice.actions
export default contactSlice.reducer
