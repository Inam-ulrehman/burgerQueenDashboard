import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleUserThunk } from '../features/user/userSlice'
import { formatDate } from '../utils/helper'

const SingleUser = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, singleUser } = useSelector((state) => state.user)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value
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
      <div>
        <label className='form-label' htmlFor='verified'>
          verified
        </label>
        <input
          className='form-input'
          type='text'
          id='verified'
          name='verified'
          value={'hello'}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className='form-label' htmlFor='roleAdmin'>
          roleAdmin
        </label>
        <input
          className='form-input'
          type='text'
          id='roleAdmin'
          name='roleAdmin'
          value={'hello'}
          onChange={handleChange}
        />
      </div>
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
          value={'hello'}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className='form-label' htmlFor='name'>
          Name
        </label>
        <input
          className='form-input'
          type='text'
          id='name'
          name='name'
          value={'hello'}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <input
          className='form-input'
          type='text'
          id='email'
          name='email'
          value={'hello'}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className='form-label' htmlFor='password'>
          Password
        </label>
        <input
          className='form-input'
          type='text'
          id='password'
          name='password'
          value={'hello'}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-block'>
        Update
      </button>
      <div>
        <p>{formatDate(singleUser.createdAt)}</p>
        <p>{formatDate(singleUser.updatedAt)}</p>
      </div>
    </form>
  )
}

export default SingleUser
