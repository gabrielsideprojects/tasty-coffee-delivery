import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'
import { ImageLabel } from '../ImageLabel'
import {
  HomeMainContainer,
  HomeSubtitleContainer,
  HomeSubtitleText,
  HomeTitle,
  LabelImagesMainContainer,
  LabelImagesSubContainer,
} from './styles'
import { useTheme } from 'styled-components'
import coffeeExpresso from '../../.././../assets/big-coffee-logo.svg'

export function HomeHeader() {
  const theme = useTheme()
  return (
    <HomeMainContainer>
      <div>
        <HomeTitle>
          Encontre o café perfeito
          <br /> para qualquer hora do dia
        </HomeTitle>
        <HomeSubtitleContainer>
          <HomeSubtitleText>
            Com o Coffee Delivery você recebe seu café onde estiver,
            <br /> á qualquer horas
          </HomeSubtitleText>
        </HomeSubtitleContainer>
        <LabelImagesMainContainer>
          <LabelImagesSubContainer>
            <ImageLabel
              icon={
                <ShoppingCart weight="fill" color={theme.white} size={20} />
              }
              title="Compra simples e segura"
            />
            <ImageLabel
              imageContainerBgColor={'yellow'}
              icon={<Clock weight="fill" color={theme.white} size={20} />}
              title="Entrega rápida e rastreada"
            />
          </LabelImagesSubContainer>
          <LabelImagesSubContainer>
            <ImageLabel
              imageContainerBgColor={'base-text'}
              icon={<Package weight="fill" color={theme.white} size={20} />}
              title="Embalagem mantém o café intacto"
            />
            <ImageLabel
              imageContainerBgColor={'purple'}
              icon={<Coffee weight="fill" color={theme.white} size={20} />}
              title="O café chega fresquinho até você"
            />
          </LabelImagesSubContainer>
        </LabelImagesMainContainer>
      </div>
      <img src={coffeeExpresso} alt="" />
    </HomeMainContainer>
  )
}
