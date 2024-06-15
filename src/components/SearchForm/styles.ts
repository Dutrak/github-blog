import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  max-width: 54rem;
  margin: 0 auto;
  margin-top: 4.5rem;
`

export const SearchFormTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font: bold;
    line-height: 160%;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    line-height: 160%;
  }
`
