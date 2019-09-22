import React, { Component } from 'react'
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

class App extends Component {
  state = { characterData: [], comicsData: [] }

  async componentDidMount() {
    let publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
    let privateKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
    let timestamp = process.env.REACT_APP_MARVEL_TIMESTAMP
    let hash = md5(timestamp + privateKey + publicKey)

    try {
      const [characterRes, comicsRes] = await Promise.all([
        axios.get(urlCharacter, {
          params: {
            ts: timestamp,
            apikey: publicKey,
            hash: hash
          }
        }),
        axios.get(urlComics, {
          params: {
            ts: timestamp,
            apikey: publicKey,
            hash: hash
          }
        })
      ])

      this.setState({
        characterData: characterRes.data.data.results[0],
        comicsData: comicsRes.data.data.results
      })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <AppWrapper className="App">
        <Styled.GlobalStyle />
        <Hero characterData={this.state.characterData} />
        <Copy characterData={this.state.characterData} />
        <ComicSlider />
      </AppWrapper>
    )
  }
}

const AppWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export default App
