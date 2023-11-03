import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2rem;
      background: ${(props) => props.theme['yellow-light']};
      border-width: 0;
      border-radius: 0.3rem;
      &:active,
      &:focus {
        box-shadow: none !important;
      }
    }
  }
`
export const LocationAndCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`
