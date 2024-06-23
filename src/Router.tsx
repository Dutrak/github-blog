import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  const repo = 'rocketseat-education/reactjs-github-blog-challenge'

  return (
    <Routes>
      <Route path="/" element={<Home repo={repo} />} />
      <Route path="/post/:id" element={<Post repo={repo} />} />
    </Routes>
  )
}
