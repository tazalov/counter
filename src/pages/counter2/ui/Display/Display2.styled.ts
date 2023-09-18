import styled from 'styled-components'
import { Common } from '../../../../app/styles/Common.styled'
import { Frag } from '../../../../app/styles/Fragments.styled'

interface StyledCountT {
  $current: number
  $max: number
}

const Count = styled.div<StyledCountT>`
  ${Frag.Border};
  border-radius: 10px;
  color: ${props => (props.$current >= props.$max ? '#f65757' : props.theme.primaryFont)};
  font-size: 80px;
  text-align: center;
  padding: 10px;
  width: 100%;
`

const Display = styled(Common.FlexWrapper)`
  ${Frag.CounterBlock};
`

const Buttons = styled(Common.FlexWrapper)`
  ${Frag.Border};
  border-radius: 10px;
  padding: 10px;
`

const Error = styled.div`
  ${Frag.Text};
  color: #f65757;
`

const Text = styled.div`
  ${Frag.Text};
`

export const S = { Count, Display, Buttons, Error, Text }
