import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import styled from 'styled-components'
const CopyRight = () => {
  return (
    <Wrapper className='footer'>
      <FaRegCopyright />
      Copyright {new Date().getFullYear()} INAM Web Solutions. All Rights
      Reserved. Web Design and Content Management by INAM Web Solutions.
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  background-color: var(--primary-5);
  overflow: hidden;
`
export default CopyRight
