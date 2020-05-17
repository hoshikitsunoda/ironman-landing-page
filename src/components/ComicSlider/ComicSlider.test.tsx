import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import ComicSlider from './ComicSlider'
import comicSliderObj from '../../__test__/mocks/comicSlider-mock.json'

import { ThemeProvider } from 'styled-components'
import * as Styled from '../styled'

describe('<ComicSlider />', () => {
  const { images, urls, title } = comicSliderObj.comicsData[0]
  let wrapper: ReactWrapper
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={Styled.theme}>
        <ComicSlider {...comicSliderObj} />
      </ThemeProvider>
    )
  })
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Comics image with correct image source', () => {
    const comic = wrapper.find('.slider').find('img').first().prop('src')
    const imgSrc = `${images[0].path}.${images[0].extension}`
    expect(comic).toEqual(imgSrc)
  })

  it('should render comics image with correct title as image alt', () => {
    const comic = wrapper.find('.slider').find('img').first().prop('alt')

    expect(comic).toEqual(title)
  })

  it('should render a tag with correct href around comic image', () => {
    const comicWrapper = wrapper.find('.slider').find('a').first().prop('href')

    expect(comicWrapper).toEqual(urls[0].url)
  })
})
