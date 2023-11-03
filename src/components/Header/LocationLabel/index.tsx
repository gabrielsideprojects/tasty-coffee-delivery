import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { LocationContainer, LocationText } from './styles'

export function LocationLabel() {
  const theme = useTheme()
  return (
    <LocationContainer>
      <MapPin weight="fill" size={22} color={theme.purple} />
      <LocationText> Aracaju, SE</LocationText>
    </LocationContainer>
  )
}
