import styled from 'styled-components'

export const IconLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    margin-left: 0.5rem;
    font: ${(props) => props.theme.fonts['text-md']};
    color: ${(props) => props.theme.colors['base-span']};
  }

  svg,
  svg path {
    fill: ${(props) => props.theme.colors['base-label']};
  }

  & + & {
    margin-left: 2rem;
  }
`
