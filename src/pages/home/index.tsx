import { PostList } from './components/PostList'
import { Profiler } from './components/Profiler'
import { SearchForm } from './components/SearchForm'

export function Home() {
  return (
    <div>
      <Profiler />
      <SearchForm />
      <PostList />
    </div>
  )
}
