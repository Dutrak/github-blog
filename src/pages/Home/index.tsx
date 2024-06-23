import { SearchForm } from './components/SearchForm'
import { PostCardContainer } from './styles'
import { api } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { Issue } from '../../@types/github'
import { Header } from '../../components/Header/Header'
import { Profile } from './components/Profile/Profile'
import { PostCard } from './components/PostCard/PostCard'
import { PostsSkeleton } from './PostsSkeleton'

export function Home({ repo }: { repo: string }) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchIssues = useCallback(
    async (query: string = '') => {
      const response = await api.get(`/search/issues`, {
        params: {
          q: `${query} repo:${repo}`,
        },
      })
      const data = response.data
      setIssues(data.items)
      setIsLoading(false)
    },
    [repo],
  )

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <>
      <Header />
      <Profile />
      <SearchForm fetchIssues={fetchIssues} />
      <PostCardContainer>
        {isLoading && <PostsSkeleton length={6} />}
        {issues.map((issue) => {
          return <PostCard data={issue} key={issue.number} />
        })}
      </PostCardContainer>
    </>
  )
}
