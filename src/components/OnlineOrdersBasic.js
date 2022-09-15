import React from 'react'
import { useSelector } from 'react-redux'
const OnlineOrdersBasic = () => {
  const { onlineorders } = useSelector((state) => state)
  return (
    <div>
      <p>Total Online Orders : {onlineorders.count}</p>
    </div>
  )
}

export default OnlineOrdersBasic
