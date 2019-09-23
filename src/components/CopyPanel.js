import React from 'react'

import styled from 'styled-components'

import GeniusIcon from '../images/icons/icon-genius.png'
import TacticianIcon from '../images/icons/icon-tactician.png'
import EngineerIcon from '../images/icons/icon-engineer.png'
import BusinessmanIcon from '../images/icons/icon-businessman.png'

const panelData = {
  genius: {
    icon: GeniusIcon,
    heading: 'Super-Genius Intelligence',
    body:
      'Quite apart from the powers granted him by the suit, Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.'
  },
  tactician: {
    icon: TacticianIcon,
    heading: 'Expert Tactician',
    body:
      'He is a brilliant tactician capable of quickly formulating battle strategies and new plans if the situation changes, like being able to elaborate complex plans in order to defeat different enemies.'
  },
  engineer: {
    icon: EngineerIcon,
    heading: 'Master Engineer',
    body:
      'He is an excellent engineer and mechanic capable of fixing almost any, if not all machinery.'
  },
  businessman: {
    icon: BusinessmanIcon,
    heading: 'Master Businessman',
    body:
      "Stark is extremely well-respected in the business world, able to command people's attentions when he speaks on economic matters.  He has built up several multi-million dollar companies from virtually nothing."
  }
}

const CopyPanel = () => {
  return (
    <PanelWrapper className="copy-panel">
      {Object.keys(panelData).map((key, i) => (
        <PanelContainer key={i}>
          <img src={panelData[key].icon} alt="" />
          <h4>{panelData[key].heading}</h4>
          <p>{panelData[key].body}</p>
        </PanelContainer>
      ))}
    </PanelWrapper>
  )
}

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;

  @media (min-width: 768px) {
    flex: 0 1 50%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const PanelContainer = styled.div`
  width: 100%;

  img {
    width: auto;
    height: 2.2rem;
    padding: 2rem 0 1rem;
  }

  h4 {
    line-height: 1.5rem;
    padding-bottom: 0.5rem;
    font-weight: 100;
  }

  p {
    color: #808080;
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    width: calc(50% - 2rem);

    &:first-child {
      order: 0;
    }

    &:nth-child(2) {
      order: 3;
    }

    &:nth-child(odd) {
      margin-bottom: 2rem;
    }

    img {
      width: auto;
      padding: 0 0 1rem;
    }

    p {
      color: #808080;
      font-size: 1rem;
    }
  }

  @media (min-width: 1200px) {
    width: calc(50% - 4rem);

    img {
      height: 3.3rem;
    }

    h4 {
      font-size: 1.25rem;
    }
  }
`

export default CopyPanel
