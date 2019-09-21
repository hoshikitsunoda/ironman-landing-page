import React from 'react'
import './App.css'

import Hero from './components/Hero'

import * as Styled from './components/styled'

function App() {
  return (
    <div className="App">
      <Styled.GlobalStyle />
      <Hero />
    </div>
  )
}

export default App
