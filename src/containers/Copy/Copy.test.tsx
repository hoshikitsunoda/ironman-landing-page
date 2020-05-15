import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import Copy from './Copy'
import CopyPanel from '../../components/CopyPanel/CopyPanel'
import copyPropsMockObj from '../../__test__/mocks/copyProps-mock.json'
import copyHeading from '../../__test__/mocks/copyHeading-mock.json'

import { ThemeProvider } from 'styled-components'
import * as Styled from '../../components/styled'

describe('<Copy />', () => {
  const { path, extension } = copyPropsMockObj.characterData.thumbnail
  let wrapper: ReactWrapper
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={Styled.theme}>
        <Copy {...copyPropsMockObj} />
      </ThemeProvider>
    )
  })

  it('should render component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render heading paragraph', () => {
    expect(wrapper.find('.heading').hostNodes()).toHaveLength(1)
    expect(wrapper.find('.heading').find('p').text()).toEqual(
      copyHeading.heading
    )
  })

  it('should render thumbnail image', () => {
    expect(wrapper.find('.thumbnail')).toHaveLength(1)
    expect(wrapper.find('.thumbnail').props().src).toEqual(
      `${path}.${extension}`
    )
  })

  it('should render CopyPanel component', () => {
    expect(wrapper.find(CopyPanel)).toHaveLength(1)
  })
})
