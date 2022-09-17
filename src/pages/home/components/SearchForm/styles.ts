import styled from 'styled-components'

export const SearchFormContainer = styled.section``

export const SearchFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.75rem;

  h2 {
    font: ${(props) => props.theme.fonts['title-sm']};
  }

  span {
    font: ${(props) => props.theme.fonts['text-sm']};
    color: ${(props) => props.theme.colors['base-span']};
  }
`

export const SearchFormContent = styled.form`
  input {
    width: 100%;
    border-radius: 6px;
    background: ${(props) => props.theme.colors['base-input']};
    padding: 0.75rem 1rem;
    border: 2px solid ${(props) => props.theme.colors['base-border']};

    font: ${(props) => props.theme.fonts['text-md']};
    color: ${(props) => props.theme.colors['base-text']};

    ::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }

    :focus {
      box-shadow: none;
      border-color: ${(props) => props.theme.colors.blue};
    }
  }
`
