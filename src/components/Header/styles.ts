import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  overflow-x: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem 1rem 9rem;

  background: ${(props) => props.theme.colors['base-profile']};

  z-index: -1;
`

const LineEffect = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const LineEffectLeft = styled(LineEffect)`
  left: 0;
`

export const LineEffectRight = styled(LineEffect)`
  right: 0;
`

interface BlueEffectBlurProps {
  top?: number
  left?: number
  bottom?: number
  right?: number
}

export const BlueEffectBlur = styled.div<BlueEffectBlurProps>`
  width: 200px;
  height: 200px;
  background: #14589c;
  filter: blur(150px);

  position: absolute;
  top: ${(props) => props.top && `${props.top}px`};
  left: ${(props) => props.left && `${props.left}px`};
  bottom: ${(props) => props.bottom && `${props.bottom}px`};
  right: ${(props) => props.right && `${props.right}px`};
`
