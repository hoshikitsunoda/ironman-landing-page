import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import ComicSlider from '../components/ComicSlider'

import { ThemeProvider } from 'styled-components'
import * as Styled from '../components/styled'

describe('<ComicSlider />', () => {
  const comicSliderProps = {
    comicsData: [
      {
        images: [
          {
            path: 'ironman',
            extension: 'jpg',
          },
        ],
        urls: [
          {
            url: 'marvel.com/ironman',
          },
        ],
        title: 'First Issue',
      },
    ],
  }
  const { images, urls, title } = comicSliderProps.comicsData[0]
  let wrapper: ReactWrapper
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={Styled.theme}>
        <ComicSlider {...comicSliderProps} />
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
