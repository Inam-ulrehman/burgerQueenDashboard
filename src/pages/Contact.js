import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ContactBasic } from '../components'
import { formatDate } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import AlertDialog from '../components/Cards/AlertDialog'
import { deleteContactUsThunk } from '../features/contact/contactSlice'
import { Link } from 'react-router-dom'
const Contact = () => {
  const { contact } = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleEdit = (e) => {
    console.log(e.target)
    console.log('Edit')
  }

  return (
    <Wrapper>
      <ContactBasic />
      <div className='tableHolder'>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          {contact.contactUs.map((item, index) => {
            return (
              <tbody key={item._id}>
                <tr>
                  <td style={{ textAlign: 'center' }}>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td>{formatDate(item.createdAt)}</td>
                  <td className='icons'>
                    <EditOutlinedIcon onClick={(e) => handleEdit(e)} />
                    <AlertDialog
                      content={'Do you really want to delete ?'}
                      title={'Alert'}
                      buttonText={<DeleteOutlineOutlinedIcon />}
                      action={() => dispatch(deleteContactUsThunk(item._id))}
                    />
                    <Link to={`/contact/${item._id}`}>
                      <InfoOutlinedIcon />
                    </Link>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default Contact
