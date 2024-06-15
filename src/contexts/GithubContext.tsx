import { ReactNode, createContext } from 'react'

interface GithubContextType {
  repo: string
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const repo = 'rocketseat-education/reactjs-github-blog-challenge'

  return (
    <GithubContext.Provider value={{ repo }}>{children}</GithubContext.Provider>
  )
}
