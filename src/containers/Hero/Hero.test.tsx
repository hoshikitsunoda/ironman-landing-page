import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import Hero from './Hero'
import Navigation from '../../components/Navigation/Navigation'
import Popup from '../../components/Popup/Popup'

import { ThemeProvider } from 'styled-components'
import * as Styled from '../../components/styled'
import ironManCartoon from '../../images/Iron-man-Cartoon.png'

describe('<Hero />', () => {
  const heroProps = {
    characterData: { description: 'Lorem ipsum dolor sit amet.' },
  }
  let wrapper: ReactWrapper
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={Styled.theme}>
        <Hero {...heroProps} />
      </ThemeProvider>
    )
  })

  it('should render component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Popup with correct props', () => {
    expect(wrapper.find(Popup).at(1)).toHaveLength(1)
  })

  it('should render Navigation component', () => {
    expect(wrapper.find(Navigation)).toHaveLength(1)
  })

  it('should render Ironman image', () => {
    expect(wrapper.find('img').props().src).toEqual(ironManCartoon)
  })
})
