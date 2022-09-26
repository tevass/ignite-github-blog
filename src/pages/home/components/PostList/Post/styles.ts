import styled from 'styled-components'

export const PostContainer = styled.article`
  padding: 2rem;
  max-height: 260px;

  background: ${(props) => props.theme.colors['base-post']};
  border-radius: 10px;

  border: 2px solid ${(props) => props.theme.colors['base-post']};

  &:hover {
    border-color: ${(props) => props.theme.colors['base-label']};
    transition: border-color 0.2s;
  }

  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;

    margin-bottom: 1.25rem;

    h3 {
      font: ${(props) => props.theme.fonts['title-md']};
      color: ${(props) => props.theme.colors['base-title']};
      flex: 1;
    }

    time {
      font: ${(props) => props.theme.fonts['text-sm']};
      color: ${(props) => props.theme.colors['base-span']};
    }
  }

  div {
    font: ${(props) => props.theme.fonts['text-md']};
    color: ${(props) => props.theme.colors['base-text']};

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
