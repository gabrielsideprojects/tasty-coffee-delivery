import styled from 'styled-components'
import MinusIcon from '../../../../../../assets/minus-icon.svg?react'
import PlusIcon from '../../../../../../assets/plus-icon.svg?react'

export const AddMinusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
`
export const AddMinusButton = styled.button`
  border: none;
  background: none;
  width: 0.875rem;
  height: 0.875rem;
  cursor: pointer;
  &:active,
  &:focus {
    box-shadow: none !important;
  }
`
export const AddMinusButtonText = styled.span`
  color: ${(props) => props.theme['purple-dark']};
  font-size: 1.2rem;
`
export const AddMinusValue = styled.span`
  color: ${(props) => props.theme['base-title']};
  text-align: center;
  font-family: 'Roboto';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3rem;
`

export const MinusIconSvg = styled(MinusIcon)`
  fill: ${(props) => props.theme.purple};
  &:hover {
    fill: ${(props) => props.theme['purple-dark']};
  }
`

export const PlusIconSvg = styled(PlusIcon)`
  fill: ${(props) => props.theme.purple};
  &:hover {
    fill: ${(props) => props.theme['purple-dark']};
  }
`
