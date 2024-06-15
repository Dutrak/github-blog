import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Issue } from '../@types/github'
import { api } from '../lib/axios'

interface GithubContextType {
  issues: Issue[]
  fetchIssues: (query: string) => Promise<void>
  fetchIssue: (id: number) => Promise<Issue>
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const repo = 'rocketseat-education/reactjs-github-blog-challenge'

  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get(`/search/issues`, {
      params: {
        q: query,
        repo,
      },
    })
    const data = await response.data
    setIssues(data.items)
  }, [])

  const fetchIssue = useCallback(async (id: number) => {
    const response = await api.get(`/repos/${repo}/issues/${id}`)
    const data = response.data

    return data
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <GithubContext.Provider value={{ issues, fetchIssues, fetchIssue }}>
      {children}
    </GithubContext.Provider>
  )
}
