import styled from 'styled-components'

export const CoffeeListItemContainer = styled.div`
  width: 16rem;
  height: 17.375rem;

  flex-shrink: 0;
  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme['base-card']};
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CoffeeHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  justify-content: space-between;
`
export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1rem;
`

export const CoffeeTagContainer = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: ${(props) => props.theme['yellow-light']};
`

export const CoffeeTagText = styled.span`
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Roboto';
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.8125rem;
  text-transform: uppercase;
`
export const CoffeeTextName = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;
`

export const CoffeeTextDescription = styled.span`
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1375rem;
`
export const CoffeePricePrefixText = styled.span`
  color: ${(props) => props.theme['base-text']};
  text-align: right;
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1375rem;
`
export const CoffeePriceValueText = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 1.1375rem;
`
export const CoffeeBottomContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
  align-items: center;
`

export const CoffeePriceContainer = styled.div`
  display: flex;
  gap: 0.2rem;
`
