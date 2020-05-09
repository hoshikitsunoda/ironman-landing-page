import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

import heroBackGround from '../images/background.png'
import ironManCartoon from '../images/Iron-man-Cartoon.png'

interface CharacterDataProps {
  characterData: { description: string }
}

const Hero: React.FC<CharacterDataProps> = (props: CharacterDataProps) => {
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

  @media (min-width: 768px) {
    padding: 0 3rem 8rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 5rem 8rem;
  }
`

const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .left {
    order: 1;
    p {
      color: #fff;
      text-align: center;
      margin-bottom: 1rem;
    }

    button {
      display: block;
      background-color: #f4bc00;
      margin: 0 auto;
      padding: 0.8rem 3.8rem;
      color: #fff;
      border-radius: 0.2rem;
      font-size: 0.9375rem;
      border: none;
      box-shadow: 0 2px 5px -2px #fff;
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

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

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
          background-image: radial-gradient(
            70% 120%,
            #f4bc00 6%,
            #f4bc00 1%,
            #cc3332 79%
          );
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

  @media (min-width: 1024px) {
    .left {
      padding-top: 5rem;
    }
  }
`

export default Hero
