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
    padding: 0.875rem 1rem;

    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    transition: ease-in-out 200ms

  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  a {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    text-transform: uppercase; 
    text-decoration: none;
    border-bottom: 1px solid transparent;

    transition: ease-in-out 300ms
  }

  a:hover{
    border-bottom: 1px solid ${(props) => props.theme.blue}
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']}´
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 160%;
  }


`
