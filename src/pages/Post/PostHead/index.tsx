import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  // eslint-disable-next-line prettier/prettier
  faComment
} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import { GitHubLink } from '../../../components/GitHubLink'
import { IconLabel } from './IconLabel'

import { PostHeadContainer, PostHeadDetails, PostHeadLinks } from './styles'

interface Head {
  title: string
  time: string
  comments: number
  user: string
  repositoryUrl: string
}

interface PostHeadProps {
  head: Head
}

export function PostHead({ head }: PostHeadProps) {
  return (
    <PostHeadContainer>
      <div>
        <PostHeadLinks>
          <Link to="/posts">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Link>
          <GitHubLink label="ver no github" href={head.repositoryUrl} />
        </PostHeadLinks>

        <h1>{head.title}</h1>

        <PostHeadDetails>
          <IconLabel icon={faGithub}>{head.user}</IconLabel>
          <IconLabel icon={faCalendarDay}>{head.time}</IconLabel>
          <IconLabel icon={faComment}>
            {head.comments} {head.comments > 1 ? 'comentários' : 'comentário'}
          </IconLabel>
        </PostHeadDetails>
      </div>
    </PostHeadContainer>
  )
}
