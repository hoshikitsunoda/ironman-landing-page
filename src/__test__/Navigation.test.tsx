import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../components/Navigation'

describe('<Navigation />', () => {
  // const wrapper = shallow(<Navigation />)
  it('Renders Navigation', () => {
    const nav = shallow(<Navigation />)
    expect(nav).toMatchSnapshot()
  })
})
// import { render } from '@testing-library/react'
// import { ThemeProvider } from 'styled-components'

// import * as Styled from '../components/styled'

// import Navigation from '../components/Navigation'

// const renderNavigation = () => {
//   return (
//     <ThemeProvider theme={Styled.theme}>
//       <Navigation />
//     </ThemeProvider>
//   )
// }

// describe('<Navigation />', () => {
//   test('renders SVG', async () => {
//     const { queryByTestId } = render(renderNavigation())

//     const logo = queryByTestId('svg') as HTMLObjectElement
//     expect(logo).toBeTruthy()
//   })
// })

// describe('<Navigation />', () => {
//   test('checks both links have correct href', async () => {
//     const { getByText } = render(renderNavigation())

//     const signIn = getByText('Sign In').closest('a') as HTMLAnchorElement
//     const signUp = getByText('Sign Up').closest('a') as HTMLAnchorElement
//     expect(signIn.href).toMatch('/signin')
//     expect(signUp.href).toMatch('/signup')
//   })
// })
