import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { GitHubLinkContainer } from './styles'

interface GitHubLinkProps {
  label: string
}

export function GitHubLink({ label }: GitHubLinkProps) {
  return (
    <GitHubLinkContainer href="/">
      <span>{label}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </GitHubLinkContainer>
  )
}
