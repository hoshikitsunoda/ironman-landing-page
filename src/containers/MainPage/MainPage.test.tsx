import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import MainPage from './MainPage'
import Hero from '../../components/Hero/Hero'
import Copy from '../../components/Copy/Copy'
import ComicSlider from '../../components/ComicSlider/ComicSlider'

import { characterObject, comicsObject } from '../../data/variables'

import { ThemeProvider } from 'styled-components'
import * as Styled from '../../components/styled'

jest.mock('axios')

const characterDataStructure = {
  characterData: characterObject,
}

const comicsDataStructure = {
  comicsData: comicsObject,
}

describe('<MainPage />', () => {
  let wrapper: ReactWrapper
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={Styled.theme}>
        <MainPage />
      </ThemeProvider>
    )
  })

  it('should render component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Hero component with correct props', () => {
    expect(wrapper.find(Hero)).toHaveLength(1)
    expect(wrapper.find(Hero).props()).toEqual(characterDataStructure)
  })

  it('should render Copy component with correct props', () => {
    expect(wrapper.find(Copy)).toHaveLength(1)
    expect(wrapper.find(Copy).props()).toEqual(characterDataStructure)
  })

  it('should render ComicSlider component with correct props', () => {
    expect(wrapper.find(ComicSlider)).toHaveLength(1)
    expect(wrapper.find(ComicSlider).props()).toEqual(comicsDataStructure)
  })
})
