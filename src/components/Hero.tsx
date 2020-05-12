import React from 'react'
import Navigation from './Navigation'
import { HeroDataProps } from '../models/Props'

import styled from 'styled-components'
import * as Styled from '../components/styled'

import heroBackGround from '../images/background.png'
import ironManCartoon from '../images/Iron-man-Cartoon.png'

const Hero: React.FC<HeroDataProps> = (props: HeroDataProps) => {
  return (
    <HeroWrapper className="hero-wrapper">
      <HeroContainer className="hero-container">
        <Navigation />
        <ContentWrapper className="hero-content-wrapper">
          <div className="left">
            <p>{props.characterData.description}</p>
            <button>Get Started</button>
          </div>
          <div className="right">
            <img src={ironManCartoon} alt="" />
          </div>
        </ContentWrapper>
      </HeroContainer>
    </HeroWrapper>
  )
}

const HeroWrapper = styled('div')`
  background-image: url(${heroBackGround});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
`

const HeroContainer = styled('div')`
  padding: 0 1.2rem 4rem;
  max-width: 1440px;
  margin: 0 auto;

  @media ${Styled.Device.tablet} {
    padding: 0 3rem 8rem;
  }

  @media ${Styled.Device.laptop} {
    padding: 1rem 5rem 8rem;
  }
`

const ContentWrapper = styled('div')`
  ${Styled.flexbox('column', 'center', 'center')}

  .left {
    order: 1;
    p {
      color: ${(props) => props.theme.colors.text};
      text-align: center;
      margin-bottom: 1rem;
    }

    button {
      display: block;
      background-color: ${(props) => props.theme.colors.primary};
      margin: 0 auto;
      padding: 0.8rem 3.8rem;
      color: ${(props) => props.theme.colors.text};
      border-radius: 0.2rem;
      font-size: 0.9375rem;
      border: none;
      box-shadow: 0 2px 5px -2px ${(props) => props.theme.colors.text};
      cursor: pointer;
    }
  }

  .right {
    order: 0;
    img {
      max-width: 230px;
      width: 100%;
      margin: 0 auto;
    }
  }

  @media ${Styled.Device.tablet} {
    ${Styled.flexbox('row', 'center', 'flex-start')}

    .left {
      flex: 0 1 60%;
      order: 0;
      padding-top: 2rem;

      p {
        text-align: left;
        font-size: 1.5rem;
        margin-bottom: 6rem;
      }

      button {
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1.2rem 6.5rem;

        &:hover {
          ${Styled.buttonHover}
        }
      }
    }

    .right {
      flex: 0 1 50%;
      order: 1;

      img {
        max-width: 410px;
      }
    }
  }

  @media ${Styled.Device.laptop} {
    .left {
      padding-top: 5rem;
    }
  }
`

export default Hero
