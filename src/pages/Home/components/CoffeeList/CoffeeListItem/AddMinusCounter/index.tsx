import { useCallback, useState } from 'react'
import { AddMinusButton, AddMinusContainer, AddMinusValue } from './styles'
import minusIcon from '../../../../../../assets/minus-icon.svg'
import plusIcon from '../../../../../../assets/plus-icon.svg'

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
        <img src={minusIcon} alt="" />
      </AddMinusButton>
      <AddMinusValue>{counter}</AddMinusValue>
      <AddMinusButton
        onClick={() => setCounter((oldCounter) => oldCounter + 1)}
      >
        <img src={plusIcon} alt="" />
      </AddMinusButton>
    </AddMinusContainer>
  )
}
