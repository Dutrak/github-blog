import { styled } from 'styled-components'

export const PostSkeletonContainer = styled.div`
  max-width: 54rem;
  height: 13.5rem;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
  padding: 2rem;
`
export const TitleSkeletonLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
