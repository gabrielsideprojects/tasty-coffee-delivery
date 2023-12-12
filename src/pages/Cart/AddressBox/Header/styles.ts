import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleText = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3rem;
`
export const SubtitleText = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-family: Roboto;
  font-size: 0.075rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`
