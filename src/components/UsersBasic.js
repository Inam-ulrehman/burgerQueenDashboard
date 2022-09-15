import React from 'react'
import { useSelector } from 'react-redux'

const UsersBasic = () => {
  const { user } = useSelector((state) => state)
  return (
    <div>
      <p>Total RegisterUsers: {user.count}</p>
    </div>
  )
}

export default UsersBasic
