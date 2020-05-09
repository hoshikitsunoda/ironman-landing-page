import React, { useState, useEffect } from 'react'
import axios from 'axios'
import md5 from 'md5'
import {
  urlCharacter,
  urlComics,
  publicKey,
  privateKey,
  timestamp,
} from './data/api'

import styled from 'styled-components'

import Hero from './components/Hero'
import Copy from './components/Copy'
import ComicSlider from './components/ComicSlider'

import * as Styled from './components/styled'

interface CharaProps {
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface ComicsProps {
  [index: number]: {
    images: {
      path: string
      extension: string
    }[]
    urls: {
      url: string
    }[]
  }
}

const App: React.FC<{
  initialChara?: CharaProps
  initialComics?: []
}> = ({
  initialChara = {
    description: '',
    thumbnail: { path: '', extension: '' },
  },
  initialComics = [],
}) => {
  const [data, setData] = useState({
    characterData: initialChara,
    comicsData: initialComics,
  })

  useEffect(() => {
    const hash = md5(timestamp + privateKey + publicKey)

    const getData = async () => {
      const paramsSetting = {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
        },
      }

      let charaResult = await axios.get(urlCharacter, paramsSetting)
      let comicsResult = await axios.get(urlComics, paramsSetting)

      await axios
        .all([charaResult, comicsResult])
        .then(
          axios.spread((...responses) => {
            charaResult = responses[0]
            comicsResult = responses[1]
          })
        )
        .catch((errors) => {
          throw new Error('Failed to get data')
        })

      setData({
        characterData: charaResult.data.data.results[0],
        comicsData: comicsResult.data.data.results,
      })
    }
    getData()
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
