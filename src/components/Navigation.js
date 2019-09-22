import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './Logo'

const Navigation = () => {
  return (
    <NavWrapper className="nav-wrapper">
      <LogoWrapper className="logo">
        <Logo />
      </LogoWrapper>
      <LinkWrapper className="linkWrapper">
        <Router>
          <NavLink to="/signin">Sign In</NavLink>
          <Button to="/signup">Sign Up</Button>
        </Router>
      </LinkWrapper>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 0;
`

const LogoWrapper = styled.div`
  width: 10.5rem;

  svg {
    width: 100%;
    height: auto;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: calc(100% - 10.5rem);
`

const Button = styled(Link)`
  background-color: #f4bc00;
  color: #fff;
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.2rem 0.7rem;
  font-size: 0.8rem;
  cursor: pointer;
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0.2rem 0.7rem;
  font-size: 0.8rem;
  cursor: pointer;
`

export default Navigation
