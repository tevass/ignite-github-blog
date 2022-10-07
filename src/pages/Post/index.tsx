import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Navigate, useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { githubAPI } from '../../services/github'
import { formatToNow } from '../../utils/formatToNow'

import { PostHead } from './PostHead'
import { PostBody } from './styles'

interface GithubIssueResponse {
  number: number
  title: string
  body: string
  created_at: string
  user: {
    login: string
  }
  comments: number
  html_url: string
}

interface PostIssue {
  id: number
  title: string
  body: string
  createdAt: string
  comments: number
  user: string
  repositoryUrl: string
}

export function Post() {
  const { id } = useParams()
  const [post, setPost] = useState<PostIssue>({
    body: '',
    comments: 0,
    createdAt: '',
    id: 0,
    repositoryUrl: '',
    title: '',
    user: '',
  })

  useEffect(() => {
    async function fetchIssue() {
      try {
        const { data } = await githubAPI.get<GithubIssueResponse>(
          `/repos/EST3V4O/ignite-github-blog/issues/${id}`,
        )

        const post: PostIssue = {
          body: data.body,
          createdAt: formatToNow(data.created_at),
          comments: data.comments,
          id: data.number,
          repositoryUrl: data.html_url,
          title: data.title,
          user: data.user.login,
        }

        setPost(post)
      } catch (error) {
        console.log(error)
      }
    }

    if (id) fetchIssue()
  }, [id])

  const isInvalidId = isNaN(Number(id))

  if (isInvalidId) {
    return <Navigate to="/posts" replace />
  }

  const postHead = {
    title: post.title,
    time: post.createdAt,
    comments: post.comments,
    user: post.user,
    repositoryUrl: post.repositoryUrl,
  }

  return (
    <article>
      <PostHead head={postHead} />
      <PostBody>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, '')}
                  {...props}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {post.body}
        </ReactMarkdown>
      </PostBody>
    </article>
  )
}
