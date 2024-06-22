import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header/Header'
import { PostCard } from '../../components/PostCard/PostCard'
import { Profile } from '../../components/Profile/Profile'
import { SearchForm } from '../../components/SearchForm'
import { PostCardContainer } from './styles'
import { GithubContext } from '../../contexts/GithubContext'

export function Home() {
  const issues = useContextSelector(GithubContext, (context) => {
    return context.issues
  })

  if (!issues) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <Profile />
      <SearchForm />
      <PostCardContainer>
        {issues.map((issue) => {
          return <PostCard data={issue} key={issue.number} />
        })}
      </PostCardContainer>
    </>
  )
}
