import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
`
export const HomeTitle = styled.h1`
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-style: normal;
  font-weight: 800;
  line-height: 3.9rem; /* 3.9rem */
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const HomeSubtitleContainer = styled.div`
  margin-top: 1rem;
`

export const HomeSubtitleText = styled.h2`
  font-family: Roboto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
export const LabelImagesMainContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
`

export const LabelImagesSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
