import React from 'react'
import { panelData } from '../data/seed'

import styled from 'styled-components'
import * as Styled from '../components/styled'

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
  ${Styled.flexbox('column', '', '')}
  padding: 0.2rem;

  @media ${(props) => props.theme.device.tablet} {
    ${Styled.flexbox('row', 'space-between', '')}
    flex: 0 1 50%;
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
    color: ${(props) => props.theme.colors.secondaryText};
    font-size: 0.875rem;
  }

  @media ${(props) => props.theme.device.tablet} {
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
      color: ${(props) => props.theme.colors.secondaryText};
      font-size: 1rem;
    }
  }

  @media ${(props) => props.theme.device.laptopL} {
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
