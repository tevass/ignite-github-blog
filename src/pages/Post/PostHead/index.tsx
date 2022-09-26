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

export function PostHead() {
  return (
    <PostHeadContainer>
      <div>
        <PostHeadLinks>
          <Link to="/posts">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Link>
          <GitHubLink
            label="ver no github"
            href="https://github.com/EST3V4O/ignite-github-blog"
          />
        </PostHeadLinks>

        <h1>JavaScript data types and data structures</h1>

        <PostHeadDetails>
          <IconLabel icon={faGithub}>estevao</IconLabel>
          <IconLabel icon={faCalendarDay}>Há 1 dia</IconLabel>
          <IconLabel icon={faComment}>5 comentários</IconLabel>
        </PostHeadDetails>
      </div>
    </PostHeadContainer>
  )
}
