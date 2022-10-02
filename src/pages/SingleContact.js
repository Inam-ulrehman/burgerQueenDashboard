import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  changeRead,
  getSingleContactUsThunk,
  changeResolve,
  getContactUsValue,
  updateSingleContactUsThunk,
} from '../features/contact/contactSlice'
import { formatDate } from '../utils/helper'

const SingleContact = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, singleContactUs, singleContactUsUpdate } = useSelector(
    (state) => state.contact
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateSingleContactUsThunk(singleContactUsUpdate))
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getContactUsValue({ name, value }))
  }

  useEffect(() => {
    if (singleContactUs.length === 0) {
      dispatch(getSingleContactUsThunk(id))
    }
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return (
      <div>
        <h1 className='title'>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        {/* created AT . created By */}
        <div>
          <p>{formatDate(singleContactUsUpdate.createdAt)}</p>
          <p>{formatDate(singleContactUsUpdate.updatedAt)}</p>
        </div>
        {/* Read */}
        <div>
          <label htmlFor='read' className='form-label'>
            {singleContactUsUpdate.read ? 'read' : 'unread'}
            <button type='button' onClick={() => dispatch(changeRead())}>
              Change
            </button>
          </label>
        </div>
        {/* resolve */}
        <div>
          <label htmlFor='resolve' className='form-label'>
            {singleContactUsUpdate.resolve ? 'Resolved' : 'unresolved'}
            <button type='button' onClick={() => dispatch(changeResolve())}>
              Change
            </button>
          </label>
        </div>
        {/* _id */}
        <div>
          <label htmlFor='_id' className='form-label'>
            Id
          </label>
          <input
            type='text'
            name='_id'
            value={singleContactUsUpdate._id}
            disabled
          />
        </div>
        {/* name */}
        <div>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            name='name'
            value={singleContactUsUpdate.name}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            value={singleContactUsUpdate.lastName}
            onChange={handleChange}
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            value={singleContactUsUpdate.email}
            onChange={handleChange}
          />
        </div>
        {/* message */}
        <div>
          <label htmlFor='message' className='form-label'>
            message
          </label>
          <input
            type='text'
            name='message'
            value={singleContactUsUpdate.message}
            onChange={handleChange}
          />
        </div>
        {/* mobile */}
        <div>
          <label htmlFor='mobile' className='form-label'>
            Mobile No
          </label>
          <input
            type='number'
            name='mobile'
            value={singleContactUsUpdate.mobile}
            onChange={handleChange}
          />
        </div>
        {/* details */}
        <div>
          <label htmlFor='details' className='form-label'>
            details
          </label>
          <textarea
            rows={6}
            type='text'
            name='details'
            value={singleContactUsUpdate.details}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SingleContact
