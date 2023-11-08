import styled from 'styled-components'

export interface LabelImageContainerProps {
  imageContainerBgColor: string
}

export const LabelTextContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`
export const LabelTextSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LabelImageContainer = styled.div<{
  imageContainerBgColor?: string
}>`
  display: flex;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.theme[props?.imageContainerBgColor || 'yellow-dark']};
  justify-content: center;
  align-items: center;
  border-radius: 62.5rem;
`
export const LabelTexT = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3rem;
`
