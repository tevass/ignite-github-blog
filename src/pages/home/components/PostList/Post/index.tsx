import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { PostContainer } from './styles'

interface PostIssue {
  id: number
  title: string
  body: string
  createdAt: string
}

interface PostProps {
  post: PostIssue
}

export function Post({ post }: PostProps) {
  return (
    <Link to={`/posts/${post.id}`}>
      <PostContainer>
        <header>
          <h3>{post.title}</h3>
          <time>{post.createdAt}</time>
        </header>

        <div>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </PostContainer>
    </Link>
  )
}
