import React from 'react'
import { useSelector } from 'react-redux'
const CashOrdersBasic = () => {
  const { cashorders } = useSelector((state) => state)
  return <div>Total cashOrders: {cashorders.count}</div>
}

export default CashOrdersBasic
