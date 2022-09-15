import React from 'react'
import { useSelector } from 'react-redux'
import UsersBasic from '../components/UsersBasic'

const Users = () => {
  const { user } = useSelector((state) => state)
  return (
    <div>
      <UsersBasic />
      <hr />
      {user.users.map((item) => {
        return (
          <div key={item._id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p style={{ maxWidth: '300px', overflowWrap: 'break-word' }}>
              Password: {item.password}
            </p>
            <p>Id: {item._id}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Users
