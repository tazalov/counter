import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { Frag } from '../../app/styles/Fragments.styled'

type HTMLInputT = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>

interface InputPT extends HTMLInputT {
  value: number
  changeValue: (value: number) => void
  error: boolean
}

export const Input: FC<InputPT> = ({ value, changeValue, error }) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => changeValue(+e.currentTarget.value)
  return <StyledInput type={'number'} value={value} onChange={handleOnChange} $error={error} />
}

const StyledInput = styled.input<{ $error: boolean }>`
  ${Frag.Border};
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  font-size: 25px;
  color: ${props => props.theme.primaryFont};
  background-color: ${props => props.theme.secondaryBg};
  &:focus-visible {
    outline: 2px solid ${props => (props.$error ? '#f65757' : 'grey')};
  }
  &::placeholder {
    color: ${props => props.theme.primaryFont};
  }
  ${props =>
    props.$error &&
    css`
      border: 3px solid #f65757;
    `}
`
