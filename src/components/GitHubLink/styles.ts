import styled from 'styled-components'

export const GitHubLinkContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 0.125rem;

  color: ${(props) => props.theme.colors.blue};

  text-decoration: none;

  border-bottom: 1.5px solid transparent;

  &:hover {
    transition: border-color 0.1s;
    border-bottom-color: ${(props) => props.theme.colors.blue};
  }

  span {
    text-transform: uppercase;
    margin-right: 0.5rem;
    font: ${(props) => props.theme.fonts.link};
    line-height: 100%;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`
