import styled from 'styled-components'

export const ProfilerContainer = styled.section`
  padding: 2rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.3),
    0px -50px 100px rgba(20, 88, 156, 0.3);

  margin-top: -7rem;
`

export const ProfilerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > div + div {
    margin-left: 2rem;
    flex: 1;
  }
`

export const ProfilerPhoto = styled.div`
  width: 9.25rem;
  height: 9.25rem;

  img {
    width: 100%;
    height: 100%;

    border-radius: 8px;
  }
`

export const ProfilerContent = styled.div`
  p {
    font: ${(props) => props.theme.fonts['text-md']};
  }
`

export const ProfilerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font: ${(props) => props.theme.fonts['title-lg']};
  }
`

export const ProfilerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 1.5rem;

  div + div {
    margin-left: 1.5rem;
  }
`
