import styled from 'styled-components'
import { Common } from '../../../../app/styles/Common.styled'
import { Frag } from '../../../../app/styles/Fragments.styled'

const Display = styled(Common.FlexWrapper)`
  ${Frag.CounterBlock};
`

const Error = styled.div`
  ${Frag.Text};
  color: #f65757;
`

const Text = styled.div`
  ${Frag.Text};
`

export const S = { Display, Error, Text }
