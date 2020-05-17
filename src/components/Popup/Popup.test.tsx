import React from 'react'
import { mount, shallow, ReactWrapper } from 'enzyme'
import Popup from './Popup'

import { ThemeProvider } from 'styled-components'
import * as Styled from '../../components/styled'

interface PopupProps {
  isShowing: any
  hide: () => void
}

const mockProp: PopupProps = {
  isShowing: true,
  hide: () => !mockProp.isShowing,
}
describe('<Popup />', () => {
  let wrapper: ReactWrapper
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={Styled.theme}>
        <Popup {...mockProp} />
      </ThemeProvider>
    )
  })
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render all elements', () => {
    expect(wrapper.find('.popup-overlay').hostNodes()).toHaveLength(1)
    expect(wrapper.find('.popup').hostNodes()).toHaveLength(1)
    expect(wrapper.find('.popup-close').hostNodes()).toHaveLength(1)
  })

  it('should have a correct paragraph on popup', () => {
    expect(wrapper.find('p').text()).toEqual('This link is disabled.')
  })

  it('should fire click event on button click', () => {
    const onClickMock = jest.fn()
    const component = shallow(
      <button type="button" className="popup-close" onClick={onClickMock}>
        <span>&times;</span>
      </button>
    )
    component.find('button').simulate('click')
    wrapper.update()
    expect(onClickMock).toBeCalledTimes(1)
  })
})
