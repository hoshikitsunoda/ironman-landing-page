import React from 'react'
import { mount } from 'enzyme'
import CopyPanel from '../components/CopyPanel'
import { panelData } from '../data/seed'

import { ThemeProvider } from 'styled-components'
import * as Styled from '../components/styled'

describe('<CopyPanel />', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={Styled.theme}>
        <CopyPanel />
      </ThemeProvider>
    )
  })

  it('should render component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have 4 children', () => {
    expect(wrapper.find('.panel').hostNodes()).toHaveLength(4)
  })

  it('should have corresponding image source', () => {
    const imgSrc = wrapper.find('img').map((item) => item.prop('src'))
    expect(imgSrc).toEqual(
      Object.keys(panelData).map(
        (key: string, i: number) => panelData[key].icon
      )
    )
  })

  it('should have corresponding headers', () => {
    const texts = wrapper.find('h4').map((node) => node.text())
    expect(texts).toEqual(
      Object.keys(panelData).map(
        (key: string, i: number) => panelData[key].heading
      )
    )
  })

  it('should have corresponding headers', () => {
    const texts = wrapper.find('p').map((node) => node.text())
    expect(texts).toEqual(
      Object.keys(panelData).map(
        (key: string, i: number) => panelData[key].body
      )
    )
  })
})
