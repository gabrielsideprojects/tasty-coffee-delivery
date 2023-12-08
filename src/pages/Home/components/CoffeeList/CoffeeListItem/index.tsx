import {
  CoffeeBottomContainer,
  CoffeeHeaderContainer,
  CoffeeImage,
  CoffeeListItemContainer,
  CoffeePriceContainer,
  CoffeePricePrefixText,
  CoffeePriceValueText,
  CoffeeTagContainer,
  CoffeeTagText,
  CoffeeTextDescription,
  CoffeeTextName,
  LittleCartAndCounterContainer,
  LittleCartButton,
} from './styles'
import coffeeExpresso from '../../../../../assets/coffee-expresso.svg'
import { AddMinusCounter } from './AddMinusCounter'
import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
export function CoffeeListItem() {
  const theme = useTheme()
  return (
    <CoffeeListItemContainer>
      <CoffeeHeaderContainer>
        <CoffeeImage src={coffeeExpresso} alt="" />
        <CoffeeTagContainer>
          <CoffeeTagText>tradicional</CoffeeTagText>
        </CoffeeTagContainer>
        <CoffeeTextName>Expresso tradicional</CoffeeTextName>
        <CoffeeTextDescription>
          O tradicional café feito com água quente e grão moídos
        </CoffeeTextDescription>
      </CoffeeHeaderContainer>
      <CoffeeBottomContainer>
        <CoffeePriceContainer>
          <CoffeePricePrefixText>R$</CoffeePricePrefixText>
          <CoffeePriceValueText>9,90</CoffeePriceValueText>
        </CoffeePriceContainer>
        <LittleCartAndCounterContainer>
          <AddMinusCounter />
          <LittleCartButton>
            <ShoppingCart size={22} color={theme.white} weight="fill" />
          </LittleCartButton>
        </LittleCartAndCounterContainer>
      </CoffeeBottomContainer>
    </CoffeeListItemContainer>
  )
}
