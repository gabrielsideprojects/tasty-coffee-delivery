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
} from './styles'
import coffeeExpresso from '../../../../../assets/coffee-expresso.svg'
import { AddMinusCounter } from './AddMinusCounter'
export function CoffeeListItem() {
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
        <AddMinusCounter />
      </CoffeeBottomContainer>
    </CoffeeListItemContainer>
  )
}
