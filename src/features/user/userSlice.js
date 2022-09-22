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

// Delete User
export const deleteUserThunk = createAsyncThunk(
  'user/deleteUserThunk',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.delete(`auth/users/${id}`)

      thunkAPI.dispatch(userThunk())
      return response.data.msg
    } catch (error) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data.msg)
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
    // =====Get User=======
    [userThunk.pending]: (state, { payload }) => {
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
    // ====delete User=====
    [deleteUserThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [deleteUserThunk.fulfilled]: (state, { payload }) => {
      toast.success(payload)

      state.isLoading = false
    },
    [deleteUserThunk.rejected]: (state, { payload }) => {
      toast.error(` ${payload}`)
      state.isLoading = false
    },
  },
})
export const { createFunction } = userSlice.actions
export default userSlice.reducer
