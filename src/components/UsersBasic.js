import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const UsersBasic = () => {
  const { user } = useSelector((state) => state)
  return (
    <Wrapper>
      Total RegisterUsers:
      <span>{user.count}</span>
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
export default UsersBasic
