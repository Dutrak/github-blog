import { SearchFormContainer, SearchFormTitle } from './styles'
import { string, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Issue } from '../../../../@types/github'

const searchFormSchema = z.object({
  query: string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  fetchIssues: (query: string) => void
  issues: Issue[]
}

export function SearchForm({ fetchIssues, issues }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleFetchIssues(data: SearchFormInputs) {
    fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleFetchIssues)}>
      <SearchFormTitle>
        <h1>Publicações</h1>
        {issues.length < 2 ? (
          <span>{issues.length} publicação</span>
        ) : (
          <span>{issues.length} publicações</span>
        )}
      </SearchFormTitle>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
