import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <NavLink to="/" title="Shop">
          <ShoppingCart size={24} />
        </NavLink>
        <NavLink to="cart" title="Cart">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
