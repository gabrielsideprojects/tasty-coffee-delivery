import { HeaderContainer, LocationAndCartContainer } from './styles'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { Cart } from './Cart'
import { LocationLabel } from './LocationLabel'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <LocationAndCartContainer>
        <LocationLabel />
        <nav>
          <NavLink to="/" title="Shop">
            <Cart />
          </NavLink>
        </nav>
      </LocationAndCartContainer>
    </HeaderContainer>
  )
}
