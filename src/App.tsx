import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import fetchData from './utils/api'

import styled from 'styled-components'

import Hero from './components/Hero'
import Copy from './components/Copy'
import ComicSlider from './components/ComicSlider'
import { CharaProps, ComicsProps } from './models/Props'

import * as Styled from './components/styled'

const App: React.FC<{
  initialChara?: CharaProps
  initialComics?: ComicsProps[]
}> = ({
  initialChara = {
    description: '',
    thumbnail: { path: '', extension: '' },
  },
  initialComics = [
    {
      images: [
        {
          path: '',
          extension: '',
        },
      ],
      urls: [
        {
          url: '',
        },
      ],
      title: '',
    },
  ],
}) => {
  const [data, setData] = useState({
    characterData: initialChara,
    comicsData: initialComics,
  })

  useEffect(() => {
    fetchData()
      .then(
        axios.spread((...responses: AxiosResponse[]) => {
          setData({
            characterData: responses[0].data.data.results[0],
            comicsData: responses[1].data.data.results,
          })
        })
      )
      .catch((errors) => {
        throw new Error('Failed to get data')
      })
  }, [])

  return (
    <AppWrapper className="App">
      <Styled.GlobalStyle />
      <Hero characterData={data.characterData} />
      <Copy characterData={data.characterData} />
      <ComicSlider comicsData={data.comicsData} />
    </AppWrapper>
  )
}

const AppWrapper = styled('div')`
  margin: 0 auto;
`

export default App
