import { SearchFormContainer, SearchFormTitle } from './styles'
import { string, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  fetchIssues: (query: string) => void
}

export function SearchForm({ fetchIssues }: SearchFormProps) {
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
        <span>6 publicações</span>
      </SearchFormTitle>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
