import {
  BlueEffectBlur,
  HeaderContainer,
  LineEffectLeft,
  // eslint-disable-next-line prettier/prettier
  LineEffectRight
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <BlueEffectBlur left={-50} top={-50} />
      <LineEffectLeft src="/line-effect-left.svg" />

      <div>
        <img src="/logo.svg" alt="GitHub Blog Logo" />
      </div>

      <BlueEffectBlur right={-50} top={-50} />
      <LineEffectRight src="/line-effect-right.svg" />
    </HeaderContainer>
  )
}
