import { useContextSelector } from 'use-context-selector'
import { SearchFormContainer, SearchFormTitle } from './styles'
import { GithubContext } from '../../contexts/GithubContext'
import { string, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchIssues = useContextSelector(GithubContext, (context) => {
    return context.fetchIssues
  })

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleFetchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
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
