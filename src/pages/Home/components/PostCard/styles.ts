import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  max-width: 26rem;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  > p {
    color: ${(props) => props.theme['base-text']};

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;

    line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const CardTitle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
    width: 15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
