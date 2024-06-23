import { useNavigate } from 'react-router-dom'
import { Issue } from '../../../../@types/github'
import { CardContainer, CardContent, CardTitle } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostCardProps {
  data: Issue
}

export function PostCard({ data }: PostCardProps) {
  const navigate = useNavigate()
  return (
    <CardContainer onClick={() => navigate(`/post/${data.number}`)}>
      <CardContent>
        <CardTitle>
          <h1>{data.title}</h1>
          <p>
            {formatDistanceToNow(new Date(data.created_at), {
              locale: { ...ptBR },
              addSuffix: true,
            })}
          </p>
        </CardTitle>
        <p>{data.body}</p>
      </CardContent>
    </CardContainer>
  )
}
