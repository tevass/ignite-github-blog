import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import { GitHubLink } from '../../../../components/GitHubLink'

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

export function Profiler() {
  return (
    <ProfilerContainer>
      <ProfilerWrapper>
        <ProfilerPhoto>
          <img src="https://github.com/EST3V4O.png" alt="Estevão" />
        </ProfilerPhoto>

        <ProfilerContent>
          <ProfilerHeader>
            <h1>Estevão</h1>
            <GitHubLink />
          </ProfilerHeader>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ProfilerInfo>
            <IconLabel icon={faGithub}>estevao</IconLabel>
            <IconLabel icon={faBuilding}>Rocketseat</IconLabel>
            <IconLabel icon={faUserGroup}>32 seguidores</IconLabel>
          </ProfilerInfo>
        </ProfilerContent>
      </ProfilerWrapper>
    </ProfilerContainer>
  )
}
