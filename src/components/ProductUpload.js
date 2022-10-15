import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { customFetch } from '../utils/axios'
import { removeImageFromLocalStorage } from '../utils/localStorage'
import ProductInputHolder from './ProductInputHolder'
const ProductUpload = ({ data, setShow, fetchData, setFetchData }) => {
  const initialState = {
    name: 'RandomName',
    price: '500',
    category: 'breakfast',
    image: data?.secure_url || '',
    cloudinaryPublicId: data?.public_id || '',
    cloudinaryData: data || '',
    description: 'Some description',
    calories: '300g',
    fat: '20g',
    fiber: '45g',
    sugar: '2g',
    protein: '400g',
    sodium: '200g',
    carbohydrates: '200g',
  }

  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, price, image } = state
    if (!name || !price || !image) {
      return toast.warning('pleas fill all fields')
    }
    try {
      const response = await customFetch.post('products/', state)
      toast.success(response.statusText)
      removeImageFromLocalStorage()
      setFetchData(!fetchData)
      setShow(false)
    } catch (error) {
      console.log(error.response.data.msg)
      toast.error(error.response.data.msg)
    }
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <ProductInputHolder
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ProductUpload
