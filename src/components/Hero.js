import React, { Component } from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

import HeroBackGround from '../images/background.png'

class Hero extends Component {
  state = { isDesktop: false }

  render() {
    console.log(this.props.characterData)
    return (
      <HeroWrapper className="hero-wrapper">
        <HeroContainer className="hero-container">
          <Navigation />
          <div>Hero Section</div>
        </HeroContainer>
      </HeroWrapper>
    )
  }
}

const HeroWrapper = styled.div`
  background-image: url(${HeroBackGround});
  background-repeat: no-repeat;
  background-size: cover;
`

const HeroContainer = styled.div`
  padding: 0 3rem;
`

export default Hero
