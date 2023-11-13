import { CoffeeListItem } from './CoffeeListItem'
import { CoffeeListMainContainer, CoffeeListTitle } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListMainContainer>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
      <CoffeeListItem />
    </CoffeeListMainContainer>
  )
}
