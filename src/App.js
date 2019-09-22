import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import styled from 'styled-components'

import Hero from './components/Hero'

import * as Styled from './components/styled'

const characterCode = '1009368'
const url = `https://gateway.marvel.com:443/v1/public/characters/${characterCode}`

class App extends Component {
  state = { characterData: [] }

  async componentDidMount() {
    let publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
    let privateKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
    let timestamp = process.env.REACT_APP_MARVEL_TIMESTAMP
    let hash = md5(timestamp + privateKey + publicKey)
    try {
      const res = await axios.get(url, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash
        }
      })
      const { data } = await res
      this.setState({
        characterData: data.data.results[0]
      })
      console.log(this.state.characterData)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <AppWrapper className="App">
        <Styled.GlobalStyle />
        <Hero characterData={this.state.characterData} />
      </AppWrapper>
    )
  }
}

const AppWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export default App
