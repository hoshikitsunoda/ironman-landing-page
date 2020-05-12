import React from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import * as Styled from '../components/styled'

import Navigation from '../components/Navigation'

const renderNavigation = () => {
  const history = createMemoryHistory()
  return (
    <ThemeProvider theme={Styled.theme}>
      <Router history={history}>
        <Navigation />
      </Router>
    </ThemeProvider>
  )
}

describe('<Navigation />', () => {
  test('renders SVG', async () => {
    const { queryByTestId } = render(renderNavigation())

    expect(queryByTestId('svg')).toBeTruthy()
  })
})

describe('<Navigation />', () => {
  test('checks both links have correct href', async () => {
    const { getByText } = render(renderNavigation())

    const signIn = getByText('Sign In').closest('a') as HTMLAnchorElement
    const signUp = getByText('Sign Up').closest('a') as HTMLAnchorElement
    expect(signIn.href).toMatch('/signin')
    expect(signUp.href).toMatch('/signup')
  })
})
