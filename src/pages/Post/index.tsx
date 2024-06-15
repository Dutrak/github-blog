import { useParams } from 'react-router-dom'

export function Post() {
  const { id } = useParams()
  return (
    <div>
      <h1>Posts Page</h1>
      <p>This is post {id}</p>
    </div>
  )
}
