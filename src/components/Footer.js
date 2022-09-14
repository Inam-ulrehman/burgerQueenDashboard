import React from 'react'
import styled from 'styled-components'
import CopyRight from './Footer/CopyRight'

const Footer = () => {
  return (
    <Wrapper>
      <CopyRight />
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  position: fixed;
  bottom: 0px;
`
export default Footer
