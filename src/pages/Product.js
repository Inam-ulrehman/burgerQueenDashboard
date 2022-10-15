import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import AllProducts from '../components/AllProducts'
import ProductUpload from '../components/ProductUpload'
import { customFetch } from '../utils/axios'

import {
  getImageFromLocalStorage,
  removeImageFromLocalStorage,
  setImageInLocalStorage,
} from '../utils/localStorage'

const Home = () => {
  const [file, setFile] = useState(null)
  const [data, setData] = useState(getImageFromLocalStorage('image') || null)
  const [show, setShow] = useState(true)
  const [fetchData, setFetchData] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }
  //  upload Image
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData()
    formData.append('file', file)
    if (!file) {
      setIsLoading(false)
      return toast.warning('please upload picture')
    }
    try {
      const response = await customFetch.post('/products/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      toast.success(response.statusText)
      setData(response.data)
      setImageInLocalStorage(response.data)
      setShow(true)
      setIsLoading(false)
    } catch (error) {
      toast.error(error.response.data)
      setIsLoading(false)
    }
  }
  // delete image

  const handleDelete = async (e) => {
    try {
      const response = await customFetch.delete('/products/upload', {
        data: {
          public_id: data.public_id,
        },
      })
      toast.success(response.data.result)
      removeImageFromLocalStorage()
      setShow(false)
    } catch (error) {
      if ((error.response.data.msg = 'not found')) {
        removeImageFromLocalStorage()
        setShow(false)
      }
      toast.error(error.response.data.msg)
    }
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      <h1>Cloudinary </h1>
      {/* Image uploaded */}
      {data && show ? (
        <div>
          <div>
            <img style={{ maxWidth: '200px' }} src={data?.secure_url} alt='' />
            <p>{data?.public_id}</p>
            <button type='button' onClick={handleDelete}>
              Delete image
            </button>
          </div>
          {/* Form input */}
          <ProductUpload
            data={data}
            setShow={setShow}
            show={show}
            fetchData={fetchData}
            setFetchData={setFetchData}
          />
        </div>
      ) : null}

      <hr />
      {/* upload image buttons */}
      {data && show ? null : (
        <div>
          <input type='file' onChange={handleChange} />
          <button type='submit' onClick={handleSubmit}>
            Upload
          </button>
        </div>
      )}
      <hr />
      <AllProducts fetchData={fetchData} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 300vh;
`

export default Home
