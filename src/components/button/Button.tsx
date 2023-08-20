import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type ButtonPT = {
  children: ReactNode
  callback: () => void
  disabled?: boolean
  color?: 'main' | 'secondary'
  $border?: boolean
}

export const Button: FC<ButtonPT> = ({
  children,
  callback,
  disabled = false,
  color = 'secondary',
  $border = true,
}) => {
  return (
    <StyledButton
      onClick={callback}
      disabled={disabled}
      color={color}
      $border={$border ? 'yes' : 'no'}
    >
      {children}
    </StyledButton>
  )
}

export type StyledButtonPT = {
  $border: 'yes' | 'no'
}

const StyledButton = styled.button<StyledButtonPT>`
  border: 3px solid
    ${props =>
      props.$border === 'yes'
        ? props.color === 'main'
          ? props.theme.secondaryFont
          : props.theme.primaryFont
        : 'none'};
  background-color: transparent;
  padding: 10px;
  color: ${props => (props.color === 'main' ? props.theme.secondaryFont : props.theme.primaryFont)};
  font-weight: 600;
  border-radius: 10px;
  font-size: 18px;
  text-transform: uppercase;
  &:disabled {
    background-color: grey;
    color: white;
    border: 3px solid grey;
  }
`
