import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ContactBasic } from '../components'
import { formatDate } from '../utils/helper'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
const Contact = () => {
  const { contact } = useSelector((state) => state)

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
                    <DeleteOutlineOutlinedIcon
                      onClick={(e) => handleDelete(e)}
                    />
                    <InfoOutlinedIcon onClick={(e) => handleRead(e)} />
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
const Wrapper = styled.div`
  .icons {
    svg:hover {
      cursor: pointer;
    }
  }
`
export default Contact
