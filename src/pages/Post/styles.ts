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
