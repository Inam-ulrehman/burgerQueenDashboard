import React from 'react'
import { useSelector } from 'react-redux'
import ProductsBasicRechart from './ProductsBasicRechart'

const ProductsBasic = () => {
  const { products } = useSelector((state) => state)
  return (
    <div>
      <p>Total products: {products.count}</p>
      <ProductsBasicRechart />
    </div>
  )
}

export default ProductsBasic
