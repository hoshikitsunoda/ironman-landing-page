import React, { Component } from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

import HeroBackGround from '../images/background.png'

class Hero extends Component {
  state = { isDesktop: false }

  render() {
    console.log(this.props.characterData.description)
    return (
      <HeroWrapper className="hero-wrapper">
        <HeroContainer className="hero-container">
          <Navigation />
          <ContentWrapper>
            <div className="left">
              <p>{this.props.characterData.description}</p>
            </div>
            <div className="right"></div>
          </ContentWrapper>
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
  padding: 0 1.2rem;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .left {
    p {
      color: #fff;
    }
  }
`

export default Hero
