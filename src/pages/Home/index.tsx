import { SearchForm } from './components/SearchForm'
import { PostCardContainer } from './styles'
import { api } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { Issue } from '../../@types/github'
import { Header } from '../../components/Header/Header'
import { Profile } from './components/Profile/Profile'
import { PostCard } from './components/PostCard/PostCard'

export function Home({ repo }: { repo: string }) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(
    async (query: string = '') => {
      const response = await api.get(`/search/issues`, {
        params: {
          q: `${query} repo:${repo}`,
        },
      })
      const data = response.data
      setIssues(data.items)
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
        {issues.map((issue) => {
          return <PostCard data={issue} key={issue.number} />
        })}
      </PostCardContainer>
    </>
  )
}
