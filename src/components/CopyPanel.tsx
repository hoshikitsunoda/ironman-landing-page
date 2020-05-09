import React from 'react'
import { panelData } from '../data/seed'

import styled from 'styled-components'

const CopyPanel: React.FC = () => {
  return (
    <PanelWrapper className="copy-panel">
      {Object.keys(panelData).map((key: string, i: number) => (
        <PanelContainer key={i}>
          <img src={panelData[key].icon} alt={key} />
          <h4>{panelData[key].heading}</h4>
          <p>{panelData[key].body}</p>
        </PanelContainer>
      ))}
    </PanelWrapper>
  )
}

const PanelWrapper = styled('div')`
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

const PanelContainer = styled('div')`
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
