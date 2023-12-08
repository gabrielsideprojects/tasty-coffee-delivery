import { CoffeeListItem } from './CoffeeListItem'
import {
  CoffeeListContainer,
  CoffeeListMainContainer,
  CoffeeListTitle,
} from './styles'

export function CoffeeList() {
  return (
    <CoffeeListMainContainer>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
      <CoffeeListContainer>
        {['teste', 'teste', 'teste', '123', '123', 'teste'].map((_, index) => {
          return (
            <li key={index}>
              <CoffeeListItem />
            </li>
          )
        })}
      </CoffeeListContainer>
    </CoffeeListMainContainer>
  )
}
