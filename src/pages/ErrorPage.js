import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import error from '../images/pageNotFound.svg'

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='img'>
        <img src={error} alt='' />
      </div>
      <div className='body'></div>
      <h3>Page not found</h3>
      <Link className='btn' to='/'>
        Home
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  height: 100vh;

  .img {
    padding-top: 5rem;
    img {
      max-width: 400px;
      max-height: 400px;
    }
  }
`
export default ErrorPage
