import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ContactBasic } from '../components'
import { formatDate } from '../utils/helper'

const Contact = () => {
  const { contact } = useSelector((state) => state)
  return (
    <Wrapper>
      <ContactBasic />
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Time</th>
            <th>Icons</th>
          </tr>
          {contact.contactUs.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td>Icons</td>
              </tr>
            )
          })}
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Message</td>
            <td>Time</td>
            <td>Icons</td>
          </tr>
        </table>
      </div>
      <hr />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  table {
    width: 100%;
  }
  table,
  tr,
  th,
  td {
    border: 2px solid black;
    border-collapse: inherit;
    border-collapse: collapse;
  }
`
export default Contact

// <p>Name: {item.name}</p>
//               <p>Last Name: {item.lastName}</p>
//               <p>Email: {item.email}</p>
//               <p>Message: {item.message}</p>
//               <p>Mobile No: {item.mobile}</p>
//               <p style={{ maxWidth: '300px', overflowWrap: 'break-word' }}>
//                 Message Details: {item.details}
//               </p>
//               <p>Created Date: {formatDate(item.createdAt)}</p>
