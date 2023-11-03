import { ShoppingCart } from 'phosphor-react'
import { ItemNumberContainer, ItemNumberText } from './styles'
import { useTheme } from 'styled-components'

export function Cart() {
  const theme = useTheme()
  return (
    <>
      <ItemNumberContainer>
        <ItemNumberText>3</ItemNumberText>
      </ItemNumberContainer>
      <ShoppingCart color={theme['yellow-dark']} size={24} />
    </>
  )
}
