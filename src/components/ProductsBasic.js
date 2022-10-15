import React from 'react'
import { useSelector } from 'react-redux'
import ProductsBasicRechart from './ProductsBasicRechart'

const ProductsBasic = () => {
  const { product } = useSelector((state) => state)
  return (
    <div>
      <p>Total products: {product?.nbHits}</p>
      <ProductsBasicRechart />
    </div>
  )
}

export default ProductsBasic
