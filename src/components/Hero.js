import React, { Component } from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

class Hero extends Component {
  state = { isDesktop: false }

  render() {
    console.log(this.props.characterData)
    return (
      <HeroWrapper>
        <HeroContainer>
          <Navigation />
          <div>Hero Section</div>
        </HeroContainer>
      </HeroWrapper>
    )
  }
}

const HeroWrapper = styled.div`
  background-image: linear-gradient(
    154deg,
    #cc3332 16%,
    #ea8d33 56%,
    #ffcc33 100%,
    #bdbafa 100%
  );
`

const HeroContainer = styled.div`
  padding: 0 3rem;
`

export default Hero
