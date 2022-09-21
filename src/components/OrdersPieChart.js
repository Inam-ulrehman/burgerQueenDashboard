import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PieChart, Pie, Tooltip } from 'recharts'
import styled from 'styled-components'

const OrdersPieChart = () => {
  const navigate = useNavigate()
  const { cashorders, onlineorders } = useSelector((state) => state)

  const data01 = [
    { name: `Online Order's`, value: 400 },
    { name: `Cash Order's`, value: 400 },
  ]
  const data02 = [
    { name: `Online Order's`, value: cashorders.count },
    { name: `Cash Order's`, value: onlineorders.count },
  ]
  const handlePie = (e) => {
    if (e === `Cash Order's`) {
      navigate('/cashorders')
      return
    } else {
      navigate('/onlineorders')
      return
    }
  }
  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Online Orders: {onlineorders.count} </span>
        <span>Cash Orders: {cashorders.count}</span>
      </div>
      <PieChart width={300} height={220}>
        <Pie
          className='pie'
          data={data01}
          dataKey='value'
          cx={150}
          cy={100}
          outerRadius={80}
          fill='var(--grey-3)'
          onClick={(e) => handlePie(e.name)}
        />
        <Tooltip />
        <Pie
          className='pie'
          data={data02}
          dataKey='value'
          cx={150}
          cy={100}
          innerRadius={70}
          outerRadius={90}
          fill='#82ca9d'
          label
          onClick={(e) => handlePie(e.name)}
        />
      </PieChart>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .pie:hover {
    cursor: pointer;
  }
  .recharts-surface {
  }
  border: 2px solid black;
`

export default OrdersPieChart
