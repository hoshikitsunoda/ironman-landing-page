import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import styled from 'styled-components'
import * as Styled from '../components/styled'

import Logo from './Logo'

const Navigation: React.FC = () => {
  return (
    <NavWrapper className="nav-wrapper">
      <LogoWrapper className="logo-wrapper">
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

const NavWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 0;

  @media ${Styled.Device.tablet} {
    padding: 2.5rem 0;
  }
`

const LogoWrapper = styled('div')`
  width: 10.5rem;

  svg {
    width: 100%;
    height: auto;
    filter: brightness(0) saturate(100%) invert(1);
  }

  @media ${Styled.Device.tablet} {
    width: auto;
  }
`

const LinkWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: calc(100% - 6.5rem);

  @media ${Styled.Device.tablet} {
    width: auto;
  }

  @media ${Styled.Device.mobile} {
    width: calc(100% - 10.5rem);
  }
`

const Button = styled(Link)`
  background-color: #f4bc00;
  color: #fff;
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.2rem 0.7rem;
  font-size: 0.75rem;
  cursor: pointer;
  box-shadow: 0 2px 5px -2px #fff;

  @media ${Styled.Device.tablet} {
    padding: 0.6rem 2rem;
    font-size: 1rem;
    font-weight: 700;

    &:hover {
      background-image: radial-gradient(
        70% 120%,
        #f4bc00 6%,
        #f4bc00 1%,
        #cc3332 79%
      );
      border-radius: 5px;
    }
  }
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0.2rem 0.7rem;
  font-size: 0.75rem;
  cursor: pointer;

  @media ${Styled.Device.tablet} {
    margin: 0.6rem 2rem;
    font-size: 1rem;
  }
`

export default Navigation
