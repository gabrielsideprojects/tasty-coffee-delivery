import styled from 'styled-components'

export const ItemNumberContainer = styled.div`
  margin-top: -2.3rem;
  margin-left: 2rem;
  position: absolute;
  display: flex;
  width: 1.4rem;
  height: 1.4rem;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background: ${(props) => props.theme['yellow-dark']};
`

export const ItemNumberText = styled.small`
  color: ${(props) => props.theme.white};
  font-weight: bold;
`
