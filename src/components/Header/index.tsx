import {
  BlueEffectBlur,
  HeaderContainer,
  HeaderContent,
  LineEffectLeft,
  // eslint-disable-next-line prettier/prettier
  LineEffectRight
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <BlueEffectBlur left={-50} top={-50} />
      <LineEffectLeft src="/line-effect-left.svg" />

      <HeaderContent>
        <img src="/logo.svg" alt="GitHub Blog Logo" />
      </HeaderContent>

      <BlueEffectBlur right={-50} top={-50} />
      <LineEffectRight src="/line-effect-right.svg" />
    </HeaderContainer>
  )
}
