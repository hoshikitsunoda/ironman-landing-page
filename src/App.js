import React, { useState, useEffect } from 'react'
import axios from 'axios'
import md5 from 'md5'
import styled from 'styled-components'

import Hero from './components/Hero'
import Copy from './components/Copy'
import ComicSlider from './components/ComicSlider'

import * as Styled from './components/styled'

const characterCode = '1009368'
const urlCharacter = `https://gateway.marvel.com:443/v1/public/characters/${characterCode}`
const urlComics = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=Iron%20Man`

const App = () => {
  const [data, setData] = useState({ characterData: [], comicsData: [] })

  useEffect(() => {
    const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
    const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
    const timestamp = process.env.REACT_APP_MARVEL_TIMESTAMP
    const hash = md5(timestamp + privateKey + publicKey)

    const getData = async () => {
      const paramsSetting = {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
        },
      }

      let charaResult = axios.get(urlCharacter, paramsSetting)
      let comicsResult = axios.get(urlComics, paramsSetting)

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

const AppWrapper = styled.div`
  margin: 0 auto;
`

export default App
