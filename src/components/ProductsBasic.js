import React from 'react'
import { useSelector } from 'react-redux'

const ProductsBasic = () => {
  const { products } = useSelector((state) => state)
  return (
    <div>
      <p>Total products: {products.count}</p>
    </div>
  )
}

export default ProductsBasic
