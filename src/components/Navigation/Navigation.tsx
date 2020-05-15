import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import styled from 'styled-components'
import * as Styled from '../../components/styled'

import Logo from '../Logo'

const Navigation: React.FC = () => {
  return (
    <NavWrapper className="nav-wrapper">
      <LogoWrapper className="logo-wrapper">
        <Logo />
      </LogoWrapper>
      <LinkWrapper className="link-wrapper">
        <Router>
          <NavLink to="/signin">Sign In</NavLink>
          <Button to="/signup">Sign Up</Button>
        </Router>
      </LinkWrapper>
    </NavWrapper>
  )
}

const NavWrapper = styled('div')`
  ${Styled.flexbox('row', 'space-between', 'flex-start')}
  padding: 1.5rem 0;

  @media ${(props) => props.theme.device.tablet} {
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

  @media ${(props) => props.theme.device.tablet} {
    width: auto;
  }
`

const LinkWrapper = styled('div')`
  ${Styled.flexbox('row', 'flex-end', 'center')}
  width: calc(100% - 6.5rem);

  @media ${(props) => props.theme.device.tablet} {
    width: auto;
  }

  @media ${(props) => props.theme.device.mobile} {
    width: calc(100% - 10.5rem);
  }
`

const Button = styled(Link)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.2rem 0.7rem;
  font-size: 0.75rem;
  cursor: pointer;
  box-shadow: 0 2px 5px -2px ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.device.tablet} {
    padding: 0.6rem 2rem;
    font-size: 1rem;
    font-weight: 700;

    &:hover {
      ${Styled.buttonHover}
      border-radius: 5px;
    }
  }
`

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  margin: 0.2rem 0.7rem;
  font-size: 0.75rem;
  cursor: pointer;

  @media ${(props) => props.theme.device.tablet} {
    margin: 0.6rem 2rem;
    font-size: 1rem;
  }
`

export default Navigation
