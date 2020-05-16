import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'
import * as Styled from '../../components/styled'

interface PopupProps {
  isShowing: boolean
  hide: () => void
}

const Popup: React.FC<PopupProps> = ({ isShowing, hide }: PopupProps) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <Overlay className="popup-overlay" />
          <Wrapper className="popup-wrapper">
            <PopupBox className="popup">
              <div className="popup-header">
                <button type="button" className="popup-close" onClick={hide}>
                  <span>&times;</span>
                </button>
              </div>
              <p>This link is disabled.</p>
            </PopupBox>
          </Wrapper>
        </React.Fragment>,
        document.body
      )
    : null

const Overlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`

const Wrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const PopupBox = styled('div')`
  z-index: 100;
  background: white;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  border-radius: 3px;
  max-width: 250px;
  padding: 2rem;

  .popup-header {
    ${Styled.flexbox('', 'flex-end', '')}

    .popup-close {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1;
      color: #000;
      opacity: 0.3;
      cursor: pointer;
      border: none;
    }
  }

  @media ${(props) => props.theme.device.tablet} {
    max-width: 500px;
  }
`

export default Popup
