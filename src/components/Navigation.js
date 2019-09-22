import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './Logo'

const Navigation = () => {
  return (
    <NavWrapper className="nav-wrapper">
      <div className="logo">
        <Logo />
      </div>
      <div className="linkWrapper">
        <Link to="/">Sign In</Link>
        <Link to="/">Sign Up</Link>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Navigation
