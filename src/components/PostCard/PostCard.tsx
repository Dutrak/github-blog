/* eslint-disable react/no-unescaped-entities */
import { Issue } from '../../@types/github'
import { CardContainer, CardContent, CardTitle } from './styles'

interface PostCardProps {
  data: Issue
}

export function PostCard({ data }: PostCardProps) {
  return (
    <CardContainer>
      <CardContent>
        <CardTitle>
          <h1>{data.title}</h1>
          <p>Há 1 dia</p>
        </CardTitle>
        <p>{data.body}</p>
      </CardContent>
    </CardContainer>
  )
}
