import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import Navigation from './Navigation'
import Logo from '../Logo'

import { ThemeProvider } from 'styled-components'
import * as Styled from '../../components/styled'

describe('<Navigation />', () => {
  let wrapper: ReactWrapper
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={Styled.theme}>
        <Navigation />
      </ThemeProvider>
    )
  })
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Logo', () => {
    expect(wrapper.find(Logo)).toHaveLength(1)
  })

  it('should render two Links', () => {
    expect(wrapper.find('Link')).toHaveLength(2)
  })

  it('should have corresponding href', () => {
    expect(wrapper.find('Link').first().props().to).toEqual('/signin')
    expect(wrapper.find('Link').last().props().to).toEqual('/signup')
  })
})
