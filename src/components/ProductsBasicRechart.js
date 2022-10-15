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
import useWindowDimensions from './hooks/WindowsWidth'

const ProductsBasicRechart = () => {
  const { product } = useSelector((state) => state)
  let { width } = useWindowDimensions()
  const data = product.products
    .map((name) => {
      return { name: name.category, Total: name.category.length }
    })
    .sort(function (a, b) {
      return b.Total - a.Total
    })

  return (
    <Wrapper>
      <div className='chart'>
        <BarChart
          className='bar'
          width={width < 600 ? (width = width - 80) : width - 300}
          height={250}
          data={data}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis dataKey='Total' />
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
