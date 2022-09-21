import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import UsersBasic from '../components/UsersBasic'
import { formatDate } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const Users = () => {
  const { user } = useSelector((state) => state)

  const handleEdit = (e) => {
    console.log(e.target)
    console.log('Edit')
  }
  const handleDelete = (e) => {
    console.log(e.target)
    console.log('Delete')
  }
  const handleRead = (e) => {
    console.log(e.target)
    console.log('Read')
  }
  return (
    <Wrapper className='tableHolder'>
      <UsersBasic />
      <hr />
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>verified</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Icons</th>
          </tr>
        </thead>
        {user.users.map((item, index) => {
          return (
            <tbody key={item._id}>
              <tr>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.verified ? 'verified' : 'unverified'}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td>{formatDate(item.updatedAt)}</td>
                <td className='icons'>
                  <EditOutlinedIcon onClick={(e) => handleEdit(e)} />
                  <DeleteOutlineOutlinedIcon onClick={(e) => handleDelete(e)} />
                  <InfoOutlinedIcon onClick={(e) => handleRead(e)} />
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default Users
