import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { Cart } from './Cart'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <NavLink to="/" title="Shop">
          <Cart />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
