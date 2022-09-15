import React from 'react'
import { useSelector } from 'react-redux'

const ContactBasic = () => {
  const { contact } = useSelector((state) => state)

  return (
    <div>
      <p>Total contact request's: {contact.count} </p>
    </div>
  )
}

export default ContactBasic
