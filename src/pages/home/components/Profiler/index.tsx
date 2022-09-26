import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import { GitHubLink } from '../../../../components/GitHubLink'
import { githubAPI } from '../../../../services/github'

import { IconLabel } from './IconLabel'
import {
  ProfilerContainer,
  ProfilerContent,
  ProfilerHeader,
  ProfilerInfo,
  ProfilerPhoto,
  // eslint-disable-next-line prettier/prettier
  ProfilerWrapper
} from './styles'

interface GithubUserResponse {
  login: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
  avatar_url: string
}

interface User {
  name: string
  username: string
  biography: string
  company: string
  followers: number
  githubUrl: string
  avatarUrl: string
}

const userKey = 'github-blog.user@1.0.0'

export function Profiler() {
  const [user, setUser] = useState<User | undefined>(() => {
    const user = localStorage.getItem(userKey)

    if (user) {
      return JSON.parse(user)
    }

    return undefined
  })

  useEffect(() => {
    if (!user) {
      async function fetchUser() {
        try {
          const { data } = await githubAPI.get<GithubUserResponse>(
            '/users/EST3V4O',
          )

          const user: User = {
            biography: data.bio,
            company: data.company,
            followers: data.followers,
            githubUrl: data.html_url,
            name: data.name,
            username: data.login,
            avatarUrl: data.avatar_url,
          }

          setUser(user)
          localStorage.setItem(userKey, JSON.stringify(user))
        } catch (error) {
          console.log(error)
        }
      }

      fetchUser()
    }
  }, [user])

  return (
    <ProfilerContainer>
      <ProfilerWrapper>
        <ProfilerPhoto>
          <img src={user?.avatarUrl} alt={user?.name} />
        </ProfilerPhoto>

        <ProfilerContent>
          <ProfilerHeader>
            <h1>{user?.name}</h1>
            <GitHubLink label="Link" href={user?.githubUrl || '/'} />
          </ProfilerHeader>
          <p>{user?.biography}</p>
          <ProfilerInfo>
            <IconLabel icon={faGithub}>{user?.username}</IconLabel>
            <IconLabel icon={faBuilding}>{user?.company}</IconLabel>
            <IconLabel icon={faUserGroup}>
              {user?.followers}{' '}
              {user && user.followers > 1 ? 'seguidores' : 'seguidor'}
            </IconLabel>
          </ProfilerInfo>
        </ProfilerContent>
      </ProfilerWrapper>
    </ProfilerContainer>
  )
}
