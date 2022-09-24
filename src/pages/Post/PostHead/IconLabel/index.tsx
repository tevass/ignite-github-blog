import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'

import { IconLabelContainer } from './styles'

interface IconLabelProps {
  children: ReactNode
  icon: IconProp
}

export function IconLabel({ icon, children }: IconLabelProps) {
  return (
    <IconLabelContainer>
      <FontAwesomeIcon icon={icon} />
      <span>{children}</span>
    </IconLabelContainer>
  )
}
