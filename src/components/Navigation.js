import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './Logo'

const Navigation = () => {
  return (
    <NavWrapper className="nav-wrapper">
      <div className="logo">
        <Logo />
      </div>
      <div className="linkWrapper">
        <Router>
          <NavLink to="/signin">Sign In</NavLink>
          <Button to="/signup">Sign Up</Button>
        </Router>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
`

const Button = styled(Link)`
  background-color: #f4bc00;
  color: #fff;
  text-decoration: none;
  padding: 0.6rem 2rem;
  border-radius: 0.2rem;
  cursor: pointer;
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0.6rem 2rem;
  cursor: pointer;
`

export default Navigation
