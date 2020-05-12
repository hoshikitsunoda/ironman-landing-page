import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import fetchData from './utils/api'

import styled, { ThemeProvider } from 'styled-components'

import Hero from './components/Hero'
import Copy from './components/Copy'
import ComicSlider from './components/ComicSlider'
import { CharacterProps, ComicsProps } from './models/Props'

import * as Styled from './components/styled'

const App: React.FC<{
  initialChara?: CharacterProps
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
          if (responses != null) {
            setData({
              characterData: responses[0].data.data.results[0],
              comicsData: responses[1].data.data.results,
            })
          }
        })
      )
      .catch((error: AxiosError) => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log(error.message)
        }
        throw new Error('Failed to get data')
      })
  }, [])

  return (
    <ThemeProvider theme={Styled.theme}>
      <AppWrapper className="App">
        <Styled.GlobalStyle />
        <Hero characterData={data.characterData} />
        <Copy characterData={data.characterData} />
        <ComicSlider comicsData={data.comicsData} />
      </AppWrapper>
    </ThemeProvider>
  )
}

const AppWrapper = styled('div')`
  margin: 0 auto;
`

export default App
