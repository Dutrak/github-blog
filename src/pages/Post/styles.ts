import { styled } from 'styled-components'

export const PostContentContainer = styled.main`
  max-width: 54rem;
  margin: 2.5rem auto;
  padding: 0 2rem;

  * {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    text-transform: capitalize;
    transition: ease-in-out 300ms;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }

  p {
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
    text-decoration: underline;
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  pre {
    padding: 1rem;
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 0.5rem;
    overflow-x: auto;
  }
`
