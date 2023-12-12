import {
  MainContainer,
  SubtitleText,
  TitleContainer,
  TitleText,
} from './styles'
import LocationIcon from '../../../../assets/location-icon.svg?react'

export function Header() {
  return (
    <MainContainer>
      <LocationIcon />
      <TitleContainer>
        <TitleText>Endereço de entrega</TitleText>
        <SubtitleText>
          Informe o endereço onde deseja receber seu pedido
        </SubtitleText>
      </TitleContainer>
    </MainContainer>
  )
}
