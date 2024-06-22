import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { GithubProvider } from './contexts/GithubContext'

export function Router() {
  return (
    <GithubProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </GithubProvider>
  )
}
