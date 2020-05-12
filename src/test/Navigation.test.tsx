import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import * as Styled from '../components/styled'

import Navigation from '../components/Navigation'

const renderNavigation = () => {
  return (
    <ThemeProvider theme={Styled.theme}>
      <Navigation />
    </ThemeProvider>
  )
}

describe('<Navigation />', () => {
  test('renders Navigation component', async () => {
    const { getAllByText } = render(renderNavigation())

    const items = await getAllByText(/Sign/)
    expect(items).toHaveLength(2)
  })
})
