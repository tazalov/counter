import styled, { css } from 'styled-components'
import { Common } from '../../../../app/styles/Common.styled'
import { Frag } from '../../../../app/styles/Fragments.styled'

const Setter = styled(Common.FlexWrapper)`
  ${Frag.CounterBlock};
`

const Form = styled.div`
  ${Frag.Border};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
`

const Title = styled.h3`
  ${Frag.Subtitle}
  color: ${props => props.theme.primaryFont};
  margin-bottom: 10px;
  text-align: center;
`

const Input = styled.input<{ $error: string }>`
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
export const S = { Setter, Form, Title, Input }
