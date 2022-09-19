import React from 'react'
import { useSelector } from 'react-redux'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip,
} from 'recharts'
import styled from 'styled-components'
import { getUniqueValues } from '../utils/helper'
import useWindowDimensions from './hooks/WindowsWidth'

const ProductsBasicRechart = () => {
  const { products } = useSelector((state) => state)

  // const category = getUniqueValues(products.productsList, 'category').slice(1)

  let { width } = useWindowDimensions()
  const data = products.productsList.map((name) => {
    return { name: name.category, Total: name.category.length }
  })
  // console.log(data)
  return (
    <Wrapper>
      ProductsBasicRechart
      <div className='chart'>
        <BarChart
          className='bar'
          width={width < 600 ? (width = width - 80) : width - 300}
          height={250}
          data={data}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='Total' fill='var(--primary-5)' />
        </BarChart>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default ProductsBasicRechart

// const data = [
//   {
//     name: 'Breakfast',
//     Total: 12,
//   },
//   {
//     name: 'Beef',
//     Total: 12,
//   },
//   {
//     name: 'Chicken',
//     Total: 14,
//   },
//   {
//     name: 'Sandwiches',
//     Total: 10,
//   },
//   {
//     name: 'Snacks',
//     Total: 3,
//   },
//   {
//     name: 'Desserts',
//     Total: 5,
//   },
//   {
//     name: 'Drinks',
//     Total: 7,
//   },
// ]
