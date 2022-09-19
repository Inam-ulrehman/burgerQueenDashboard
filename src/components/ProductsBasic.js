import React from 'react'
import { useSelector } from 'react-redux'
import FusionChart from './FusionChart'

const ProductsBasic = () => {
  const { products } = useSelector((state) => state)
  return (
    <div>
      <p>Total products: {products.count}</p>
      <FusionChart />
    </div>
  )
}

export default ProductsBasic
