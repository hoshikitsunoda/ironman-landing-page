import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import Copy from './Copy'
import CopyPanel from './CopyPanel'

import { ThemeProvider } from 'styled-components'
import * as Styled from './styled'

describe('<Copy />', () => {
  const copyProps = {
    characterData: { thumbnail: { path: 'ironman', extension: 'jpg' } },
  }
  let wrapper: ReactWrapper
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={Styled.theme}>
        <Copy {...copyProps} />
      </ThemeProvider>
    )
  })

  it('should render component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render heading paragraph', () => {
    expect(wrapper.find('.heading').hostNodes()).toHaveLength(1)
  })

  it('should render CopyPanel component', () => {
    expect(wrapper.find('.thumbnail')).toHaveLength(1)
  })

  it('should render CopyPanel component', () => {
    expect(wrapper.find(CopyPanel)).toHaveLength(1)
  })
})
