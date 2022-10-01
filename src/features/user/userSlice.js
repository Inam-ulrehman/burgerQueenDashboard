import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'

const initialState = {
  users: [],
  singleUser: [],
  singleUserUpdate: {
    verified: '',
    roleAdmin: '',
    _id: '',
    name: '',
    email: '',
    password: '',
    createdAt: '',
    updatedAt: '',
  },

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

// ===Delete User===
export const deleteUserThunk = createAsyncThunk(
  'user/deleteUserThunk',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.delete(`auth/users/${id}`)

      thunkAPI.dispatch(userThunk())
      return response.data.msg
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
// ===Get Single User===
export const getSingleUserThunk = createAsyncThunk(
  'user/getSingleUserThunk',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.post(`auth/users/${id}`)
      return response.data.user
    } catch (error) {
      console.log(error.response.data)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)
// ===Update Single User===
export const updateSingleUserThunk = createAsyncThunk(
  'user/updateSingleUserThunk',
  async (user, thunkAPI) => {
    // console.log(user)
    try {
      console.log(user._id)
      const response = await customFetch.patch(`/auth/users/${user._id}`, user)

      // const response = await customFetch.post(`auth/users/${user._id}`, user)

      console.log(response)
      return response.data.user
    } catch (error) {
      console.log(error)
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
    }, // root -> user/:id -> pages>SingleUserPage

    // root -> user/:id -> pages>SingleUserPage
    getSingleUserValue: (state, { payload }) => {
      const { name, value } = payload
      state.singleUserUpdate = { ...state.singleUserUpdate, [name]: value }
    },
    // root -> user/:id -> pages>SingleUserPage
    handleVerified: (state, { payload }) => {
      state.singleUserUpdate.verified = !state.singleUserUpdate.verified
    },
    handleRoleAdmin: (state, { payload }) => {
      state.singleUserUpdate.roleAdmin = !state.singleUserUpdate.roleAdmin
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
      toast.error(payload)

      state.isLoading = false
    },
    // ====get Single User=====
    [getSingleUserThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getSingleUserThunk.fulfilled]: (state, { payload }) => {
      state.singleUser = [payload]

      state.singleUserUpdate.name = payload.name
      state.singleUserUpdate.verified = payload.verified
      state.singleUserUpdate.roleAdmin = payload.roleAdmin
      state.singleUserUpdate.email = payload.email
      state.singleUserUpdate.password = payload.password
      state.singleUserUpdate._id = payload._id
      state.singleUserUpdate.createdAt = payload.createdAt
      state.singleUserUpdate.updatedAt = payload.updatedAt
      state.isLoading = false
    },
    [getSingleUserThunk.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
    // ====updateSingle User=====
    [updateSingleUserThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [updateSingleUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
    },
    [updateSingleUserThunk.rejected]: (state, { payload }) => {
      toast.error(payload)
      state.isLoading = false
    },
  },
})
export const {
  createFunction,
  getSingleUserValue,
  getSingleUserUpdateVerified,
  handleVerified,
  handleRoleAdmin,
} = userSlice.actions
export default userSlice.reducer
