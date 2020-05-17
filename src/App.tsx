import React from 'react'

import MainPage from './containers/MainPage/MainPage'

import { ThemeProvider } from 'styled-components'
import * as Styled from './components/styled'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Styled.theme}>
      <Styled.GlobalStyle />
      <MainPage />
    </ThemeProvider>
  )
}

export default App
