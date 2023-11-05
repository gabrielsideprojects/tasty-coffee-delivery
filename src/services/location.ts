import axios from 'axios'
import { GOOGLE_API_KEY } from '../utils/consts'
import { LocationData } from '../interfaces/location'

export async function obtainLocationDataFromLatLong(): Promise<LocationData> {
  const position = (await getCurrentPosition()) as GeolocationPosition
  return new Promise<LocationData>((resolve, reject) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
    const result = { city: '', state: '' } as LocationData
    axios.get(apiUrl).then((response) => {
      if (response.data.status === 'OK') {
        const results = response.data.results
        for (let i = 0; i < results.length; i++) {
          const addressComponents = results[i].address_components
          for (let j = 0; j < addressComponents.length; j++) {
            const types = addressComponents[j].types
            if (types.includes('locality')) {
              result.city = addressComponents[j].long_name
            } else if (types.includes('administrative_area_level_1')) {
              result.state = addressComponents[j].short_name
            }
          }
        }
        resolve(result)
      } else {
        reject(new Error('Error to obtain user location'))
      }
    })
  }).catch((error) => {
    throw new Error(error)
  })
}

export function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          resolve(position)
        },
        (error) => {
          reject(error)
        },
      )
    } else {
      console.log('Geolocation is not available in this browser.')
    }
  })
}
