import styled from 'styled-components'

export const PostCardContainer = styled.section`
  max-width: 54rem;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
export const PostCardSkeletonContent = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
`
