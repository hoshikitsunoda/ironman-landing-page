import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './containers/MainPage/MainPage'

import { ThemeProvider } from 'styled-components'
import * as Styled from './components/styled'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Styled.theme}>
        <Styled.GlobalStyle />
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
