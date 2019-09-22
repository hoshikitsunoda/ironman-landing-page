import { createGlobalStyle } from 'styled-components'

// Global

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito|Ropa+Sans&display=swap');

  html {
    background-color: #fffafa;
  }
  
  html * {
    font-family: 'Nunito', sans-serif;
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
