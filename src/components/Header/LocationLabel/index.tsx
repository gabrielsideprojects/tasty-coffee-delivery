import { MapPin } from 'phosphor-react'
import { useEffect, useState, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { LocationContainer, LocationText } from './styles'
import { obtainLocationDataFromLatLong } from '../../../services/location'
import { LocationData } from '../../../interfaces/location'

export function LocationLabel() {
  const theme = useTheme()
  const [userGeolocation, setUserGeolocation] = useState<LocationData>({
    city: '',
    state: '',
  })

  async function handleLocation() {
    try {
      const userCityAndState = await obtainLocationDataFromLatLong()
      setUserGeolocation(userCityAndState)
      console.log('TESTE: ' + userCityAndState.city)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    handleLocation()
  }, [])

  const renderUserLocation = useMemo(() => {
    const { city, state } = userGeolocation
    if (city && state) {
      return `${city}, ${state}`
    }
    return '-'
  }, [userGeolocation])

  return (
    <LocationContainer>
      <MapPin weight="fill" size={22} color={theme.purple} />
      <LocationText>{renderUserLocation}</LocationText>
    </LocationContainer>
  )
}
