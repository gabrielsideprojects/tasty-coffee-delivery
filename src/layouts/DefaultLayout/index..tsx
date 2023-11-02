
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <h1>HEADER TESTE</h1>
      <Outlet />
    </LayoutContainer>
  )
}
