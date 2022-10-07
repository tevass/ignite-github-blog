import styled from 'styled-components'

export const PostBody = styled.section`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.blue};
    text-decoration: underline;
    margin-bottom: 0.25rem;
    margin-top: 1.75rem;
  }

  p {
    margin-bottom: 1.125rem;
  }
`
