import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'
import { SingleProductInputHolder } from '.'

const SingleProduct = () => {
  const param = useParams()
  const { isLoading, products } = useSelector((state) => state.product)
  const singleProduct = products.find((item) => item._id === param.Id)
  const initialState = {
    _id: singleProduct?._id,
    name: singleProduct?.name,
    price: singleProduct?.price,
    category: singleProduct?.category,
    image: singleProduct?.image,
    cloudinaryPublicId: singleProduct?.cloudinaryPublicId,
    description: singleProduct?.description,
    calories: singleProduct?.calories,
    fat: singleProduct?.fat,
    fiber: singleProduct?.fiber,
    sugar: singleProduct?.sugar,
    protein: singleProduct?.protein,
    sodium: singleProduct?.sodium,
    carbohydrates: singleProduct?.carbohydrates,
  }
  const [state, setState] = useState(initialState)

  //  update details
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await customFetch.patch('products/', state)
      toast.success(result.statusText)
    } catch (error) {
      toast.error(error.response.data)
    }
  }

  // On change
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setState({ ...state, [name]: value })
  }
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='div'></div>
      </div>
    )
  }
  return (
    <div>
      <div className='img'>
        <img style={{ maxWidth: '200px' }} src={singleProduct?.image} alt='' />
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <SingleProductInputHolder
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default SingleProduct
