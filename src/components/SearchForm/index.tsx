import { SearchFormContainer, SearchFormTitle } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormTitle>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </SearchFormTitle>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
