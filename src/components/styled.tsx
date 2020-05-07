import { createGlobalStyle } from 'styled-components'

// Global

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito|Ropa+Sans&display=swap');

  html {
    background-color: #ffffff;
  }
  
  html * {
    font-family: 'Nunito', sans-serif;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Ropa Sans', sans-serif;
  }

  img {
    display: block;
  }
`

const size = {
  mobileS: '350px',
  tabletS: '768px',
  tabletL: '1024px',
  laptop: '1200px',
}

export const Device = {
  mobileS: size.mobileS,
  tabletS: size.tabletS,
  tabletL: size.tabletL,
  laptop: size.laptop,
}
