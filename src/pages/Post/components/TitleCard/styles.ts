import { styled } from 'styled-components'

export const TitleCardContainer = styled.div`
  max-width: 54rem;
  height: 13.5rem;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
  padding: 2rem;
`

export const TitleLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }
`

export const TitleCardFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    span {
      color: ${(props) => props.theme['base-text']};
    }
  }
`
