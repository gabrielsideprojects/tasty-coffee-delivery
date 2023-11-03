import styled from 'styled-components'

export const LocationContainer = styled.div`
  display: flex;
  padding: 0.4rem;
  border-radius: 0.4rem;
  gap: 0.1rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['purple-light']};
`
export const LocationText = styled.span`
  color: ${(props) => props.theme['purple-dark']};
`
