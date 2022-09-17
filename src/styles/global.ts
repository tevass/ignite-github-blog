import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Nunito, sans-serif;
    line-height: 160%;
  }

  h1, h2, h3 {
    color: ${(props) => props.theme.colors['base-title']};
  }
`
