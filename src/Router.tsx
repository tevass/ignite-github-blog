import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'

import { Home } from './pages/home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
