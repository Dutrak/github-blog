import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  input {
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']}´
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }


`
