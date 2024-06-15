import styled from 'styled-components'
import bgHeader from '../../assets/bgHeader.svg'

export const HeaderContainer = styled.div`
  background: url(${bgHeader}) no-repeat;
  background-size: cover;
  padding: 4rem 0 10.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`
