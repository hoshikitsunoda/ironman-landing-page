import React, { Component } from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

import heroBackGround from '../images/background.png'
import ironManCartoon from '../images/Iron-man-Cartoon.png'

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
            <div className="right">
              <img src={ironManCartoon} alt="" />
            </div>
          </ContentWrapper>
        </HeroContainer>
      </HeroWrapper>
    )
  }
}

const HeroWrapper = styled.div`
  background-image: url(${heroBackGround});
  background-repeat: no-repeat;
  background-size: cover;
`

const HeroContainer = styled.div`
  padding: 0 1.2rem;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .left {
    order: 1;
    p {
      color: #fff;
      text-align: center;
    }
  }

  .right {
    order: 0;
    img {
      max-width: 230px;
      width: 100%;
    }
  }
`

export default Hero
