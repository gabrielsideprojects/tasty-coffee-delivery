import { useCallback, useState } from 'react'
import {
  AddMinusButton,
  AddMinusContainer,
  AddMinusValue,
  MinusIconSvg,
  PlusIconSvg,
} from './styles'

export function AddMinusCounter() {
  const [counter, setCounter] = useState(0)

  const handleDecreaseCounter = useCallback(() => {
    if (counter === 0) {
      return
    }
    setCounter((oldCounter) => oldCounter - 1)
  }, [counter])

  return (
    <AddMinusContainer>
      <AddMinusButton onClick={handleDecreaseCounter}>
        <MinusIconSvg />
      </AddMinusButton>
      <AddMinusValue>{counter}</AddMinusValue>
      <AddMinusButton
        onClick={() => setCounter((oldCounter) => oldCounter + 1)}
      >
        <PlusIconSvg />
      </AddMinusButton>
    </AddMinusContainer>
  )
}
