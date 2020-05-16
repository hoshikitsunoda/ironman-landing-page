import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import fetchData from './utils/api'
import { urlCharacter, urlComics, paramsSetting } from './data/api'
import { characterObject, comicsObject } from './data/variables'

import styled, { ThemeProvider } from 'styled-components'

import Hero from './containers/Hero/Hero'
import Copy from './containers/Copy/Copy'
import ComicSlider from './containers/ComicSlider/ComicSlider'
import { AppProps } from './models/Props'

import * as Styled from './components/styled'

const App: React.FC<AppProps> = ({
  initialCharacter = characterObject,
  initialComics = comicsObject,
}) => {
  const [data, setData] = useState({
    characterData: initialCharacter,
    comicsData: initialComics,
  })

  useEffect(() => {
    fetchData([urlCharacter, urlComics], paramsSetting)
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
