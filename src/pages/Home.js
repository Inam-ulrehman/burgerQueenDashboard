import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { scrollUp } from '../utils/helper'

const Home = () => {
  return (
    <Wrapper>
      <Button variant='contained' className='button' onClick={() => scrollUp()}>
        click me
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 300vh;
  .button {
    position: fixed;
    bottom: 10%;
  }
`

export default Home
