import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'

const initialState = {
  contactUs: [],
  singleContactUs: [],
  singleContactUsUpdate: {
    read: '',
    resolve: '',
    _id: '',
    name: '',
    lastName: '',
    email: '',
    message: '',
    mobile: '',
    details: '',
    createdAt: '',
    updatedAt: '',
  },
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
// ===Get Single ContactUs===
export const getSingleContactUsThunk = createAsyncThunk(
  'contact/getSingleContactUsThunk',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.get(`/contactus/${id}`)
      return response.data.contactUs
    } catch (error) {
      console.log(error.response.data)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// ===Update Single ContactUs===
export const updateSingleContactUsThunk = createAsyncThunk(
  'contact/updateSingleContactUsThunk',
  async (contactUs, thunkAPI) => {
    console.log(contactUs)
    try {
      const response = await customFetch.patch(`/contactus/${contactUs._id}`, {
        contactUs,
      })
      console.log(response.data)
      return response.data.contactUs
    } catch (error) {
      console.log(error.response)
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
    // root -> contact/:id -> pages>SingleContactPage
    changeRead: (state, { payload }) => {
      state.singleContactUsUpdate.read = !state.singleContactUsUpdate.read
    },
    // root -> contact/:id -> pages>SingleContactPage

    changeResolve: (state, { payload }) => {
      state.singleContactUsUpdate.resolve = !state.singleContactUsUpdate.resolve
    },
    // root -> contact/:id -> pages>SingleContactPage

    getContactUsValue: (state, { payload }) => {
      console.log(payload)
      const { name, value } = payload
      state.singleContactUsUpdate = {
        ...state.singleContactUsUpdate,
        [name]: value,
      }
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
    // ====Delete Contact=====
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
    // ====Get Single Contact=====
    [getSingleContactUsThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getSingleContactUsThunk.fulfilled]: (state, { payload }) => {
      state.singleContactUs = [payload]

      state.singleContactUsUpdate.read = payload.read
      state.singleContactUsUpdate.resolve = payload.resolve
      state.singleContactUsUpdate._id = payload._id
      state.singleContactUsUpdate.name = payload.name
      state.singleContactUsUpdate.lastName = payload.lastName
      state.singleContactUsUpdate.email = payload.email
      state.singleContactUsUpdate.message = payload.message
      state.singleContactUsUpdate.mobile = payload.mobile
      state.singleContactUsUpdate.details = payload.details
      state.singleContactUsUpdate.createdAt = payload.createdAt
      state.singleContactUsUpdate.updatedAt = payload.updatedAt
      state.isLoading = false
    },
    [getSingleContactUsThunk.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
    // ====Delete Contact=====
    [updateSingleContactUsThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [updateSingleContactUsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
    },
    [updateSingleContactUsThunk.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
  },
})
export const { createFunction, changeRead, changeResolve, getContactUsValue } =
  contactSlice.actions
export default contactSlice.reducer
