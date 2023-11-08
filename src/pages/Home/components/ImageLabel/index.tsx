import { LabelImageContainer, LabelTexT, LabelTextSubContainer } from './styles'
import { ReactNode } from 'react'

interface ImageLabelProps {
  imageContainerBgColor?: string
  title: string
  icon: ReactNode
}
export function ImageLabel({
  imageContainerBgColor,
  icon,
  title,
}: ImageLabelProps) {
  return (
    <LabelTextSubContainer>
      <LabelImageContainer imageContainerBgColor={imageContainerBgColor}>
        {icon}
      </LabelImageContainer>
      <LabelTexT>{title}</LabelTexT>
    </LabelTextSubContainer>
  )
}
