import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ContactBasic = () => {
  const { contact } = useSelector((state) => state)

  return (
    <Wrapper>
      Total contact request's: <span>{contact.count} </span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-7);
  color: white;
  box-shadow: var(--shadow-2);
  margin: 1rem;
  padding: 1rem;
  span {
    margin-left: 1rem;
  }
`
export default ContactBasic
