import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 54rem;
  height: 13.5rem;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
`

export const ProfileCard = styled.div`
  display: flex;
  padding: 2rem 2.5rem 2rem 2.5rem;
  gap: 2rem;

  img {
    width: 9.25rem;
    border-radius: 10px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 160%;
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const ProfileFooter = styled.div`
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
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 160%;
    }
  }
`
export const ProfileCardSkeleton = styled.div`
  display: flex;
  padding: 2rem 2.5rem 2rem 2.5rem;
  gap: 2rem;
`
