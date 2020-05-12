import { createGlobalStyle, css } from 'styled-components'

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
  mobile: '350px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1200px',
}

export const Device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
}

export const buttonHover = css`
  background-image: radial-gradient(
    70% 120%,
    #f4bc00 6%,
    #f4bc00 1%,
    #cc3332 79%
  );
`
export function flexbox($direction: string, $justify: string, $align: string) {
  return `
    display: flex;
    flex-direction: ${$direction};
    justify-content: ${$justify};
    align-items: ${$align};
  `
}
