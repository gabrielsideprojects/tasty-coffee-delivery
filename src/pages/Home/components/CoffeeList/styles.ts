import styled from 'styled-components'

export const CoffeeListMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;
  margin-top: 6rem;
`

export const CoffeeListTitle = styled.h1`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: 2.6rem;
`

export const CoffeeListContainer = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 2rem;
  flex-wrap: wrap;
`
