import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { GitHubLinkContainer } from './styles'

interface GitHubLinkProps {
  label: string
  href: string
}

export function GitHubLink({ label, href }: GitHubLinkProps) {
  return (
    <GitHubLinkContainer href={href} target="_blank">
      <span>{label}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </GitHubLinkContainer>
  )
}
