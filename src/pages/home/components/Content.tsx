import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'

import { useDebounce } from '../../../hooks/useDebounce'

import { githubAPI } from '../../../services/github'
import { formatToNow } from '../../../utils/formatToNow'

import { PostList } from './PostList'
import { SearchForm } from './SearchForm'

interface GithubIssueResponse {
  number: number
  title: string
  body: string
  created_at: string
}

interface GithubSearchIssueResponse {
  items: GithubIssueResponse[]
}

interface PostIssue {
  id: number
  title: string
  body: string
  createdAt: string
}

export interface SearchFormData {
  query: string
}

export function Content() {
  const [posts, setPosts] = useState<PostIssue[]>([])

  const searchForm = useForm<SearchFormData>()

  const query = useWatch({ control: searchForm.control, name: 'query' })
  const debouncedQuery = useDebounce(query, 400)

  const fetchPosts = useCallback(async (url: string) => {
    try {
      const { data } = await githubAPI.get<
        GithubIssueResponse[] | GithubSearchIssueResponse
      >(url)

      const responseIsArray = Array.isArray(data)

      if (responseIsArray) {
        const posts: PostIssue[] = data.map((post) => {
          return {
            body: post.body,
            createdAt: formatToNow(post.created_at),
            id: post.number,
            title: post.title,
          }
        })

        setPosts(posts)
      } else {
        const posts: PostIssue[] = data.items.map((post) => {
          return {
            body: post.body,
            createdAt: formatToNow(post.created_at),
            id: post.number,
            title: post.title,
          }
        })

        setPosts(posts)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    if (!debouncedQuery) {
      const url = '/repos/EST3V4O/ignite-github-blog/issues'

      fetchPosts(url)
    } else {
      const url = `/search/issues?q=${debouncedQuery}%20repo:EST3V4O/ignite-github-blog`

      fetchPosts(url)
    }
  }, [fetchPosts, debouncedQuery])

  const postsAmount = posts.length

  return (
    <div>
      <FormProvider {...searchForm}>
        <SearchForm postsAmount={postsAmount} />
      </FormProvider>

      <PostList posts={posts} />
    </div>
  )
}
