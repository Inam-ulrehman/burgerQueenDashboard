import { useSelector } from 'react-redux'
import { ContactBasic } from '../components'
import { formatDate } from '../utils/helper'

const Contact = () => {
  const { contact } = useSelector((state) => state)
  return (
    <div>
      <ContactBasic />
      {contact.contactUs.map((item) => {
        return (
          <div key={item._id}>
            <p>Name: {item.name}</p>
            <p>Last Name: {item.lastName}</p>
            <p>Email: {item.email}</p>
            <p>Message: {item.message}</p>
            <p>Mobile No: {item.mobile}</p>
            <p style={{ maxWidth: '300px', overflowWrap: 'break-word' }}>
              Message Details: {item.details}
            </p>
            <p>Created Date: {formatDate(item.createdAt)}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Contact
