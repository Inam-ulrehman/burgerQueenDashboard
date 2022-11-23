import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import UsersBasic from '../components/UsersBasic'
import { formatDate } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import AlertDialog from '../components/Cards/AlertDialog'
import { deleteUserThunk } from '../features/user/userSlice'
import { Link } from 'react-router-dom'

const Users = () => {
  const { user } = useSelector((state) => state)
  const dispatch = useDispatch()

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
          const { _id } = item
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
                  <AlertDialog
                    content={'Do you really want to delete ?'}
                    title={'Alert'}
                    buttonText={<DeleteOutlineOutlinedIcon />}
                    action={() => dispatch(deleteUserThunk(_id))}
                  />
                  <Link to={`/users/${_id}`}>
                    <EditOutlinedIcon />
                  </Link>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .icons {
    display: flex;
    border: transparent;
  }
`
export default Users
