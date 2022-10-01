import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getSingleUserThunk,
  getSingleUserValue,
  handleVerified,
  handleRoleAdmin,
  updateSingleUserThunk,
} from '../features/user/userSlice'
import { formatDate } from '../utils/helper'

const SingleUser = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, singleUser, singleUserUpdate } = useSelector(
    (state) => state.user
  )
  const { name } = singleUserUpdate

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(updateSingleUserThunk(singleUserUpdate))
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    dispatch(getSingleUserValue({ name, value }))
  }

  const handleVerifiedButton = (e) => {
    dispatch(handleVerified())
  }
  const handleAdminButton = (e) => {
    dispatch(handleRoleAdmin())
  }

  useEffect(() => {
    if (singleUser.length === 0) {
      dispatch(getSingleUserThunk(id))
    }
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return (
      <div>
        <div className='loading'></div>
      </div>
    )
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      {/* verified */}
      <div>
        <label className='form-label' htmlFor='verified'>
          {singleUserUpdate.verified ? 'Verified' : 'Not Verified'}
        </label>
        <button type='button' onClick={handleVerifiedButton}>
          Change Status
        </button>
      </div>
      {/* roleAdmin */}
      <div>
        <label className='form-label' htmlFor='roleAdmin'>
          {singleUserUpdate.roleAdmin ? 'Admin' : 'Member'}
        </label>
        <button type='button' onClick={handleAdminButton}>
          Change Status
        </button>
      </div>
      {/* Id */}
      <div>
        <label className='form-label' htmlFor='_id'>
          Id
        </label>
        <input
          disabled={true}
          className='form-input'
          type='text'
          id='_id'
          name='_id'
          value={singleUserUpdate._id}
          onChange={handleChange}
        />
      </div>
      {/* Name */}
      <div>
        <label className='form-label' htmlFor='name'>
          Name
        </label>
        <input
          className='form-input'
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </div>
      {/* Email */}
      <div>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <input
          className='form-input'
          type='text'
          id='email'
          name='email'
          value={singleUserUpdate.email}
          onChange={handleChange}
        />
      </div>
      {/* password */}
      <div>
        <label className='form-label' htmlFor='password'>
          Password
        </label>
        <input
          className='form-input'
          type='text'
          id='password'
          name='password'
          value={singleUserUpdate.password}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-block'>
        Update
      </button>
      <div>
        <p>{formatDate(singleUserUpdate.createdAt)}</p>
        <p>{formatDate(singleUserUpdate.updatedAt)}</p>
      </div>
    </form>
  )
}

export default SingleUser
