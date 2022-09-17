import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { GitHubLinkContainer } from './styles'

export function GitHubLink() {
  return (
    <GitHubLinkContainer href="/">
      <span>Link</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </GitHubLinkContainer>
  )
}
