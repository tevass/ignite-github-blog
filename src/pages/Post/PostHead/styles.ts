import styled from 'styled-components'

export const PostHeadContainer = styled.section`
  padding: 2rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.3),
    0px -50px 100px rgba(20, 88, 156, 0.3);

  margin-top: -6rem;
  margin-bottom: 4.5rem;

  h1 {
    font: ${(props) => props.theme.fonts['title-lg']};
    color: ${(props) => props.theme.colors['base-title']};
  }
`

export const PostHeadLinks = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.colors.blue};

    text-decoration: none;

    span {
      text-transform: uppercase;
      margin-left: 0.5rem;
      font: ${(props) => props.theme.fonts.link};
      line-height: 100%;
    }

    svg {
      width: 12px;
      height: 12px;
    }
  }
`

export const PostHeadDetails = styled.div`
  margin-top: 0.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`
