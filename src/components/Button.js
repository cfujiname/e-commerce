import styled from 'styled-components'

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 2rem;
  background: transparent;
  border: transparent;
  color: var(--mainBlack);
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainWhite);
    color: var(--darkGrey);
  }
  &:focus {
    outline: none;
  }
`