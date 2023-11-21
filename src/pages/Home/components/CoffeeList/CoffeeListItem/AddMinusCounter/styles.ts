import styled from 'styled-components'

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
