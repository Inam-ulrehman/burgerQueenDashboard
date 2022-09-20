import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const UsersBasic = () => {
  const { user } = useSelector((state) => state)
  return (
    <Wrapper>
      <p>Total RegisterUsers: {user.count}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default UsersBasic
