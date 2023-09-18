import styled from 'styled-components'
import { Common } from './styles/Common.styled'

const App = styled(Common.FlexWrapper)`
  padding: 20px;
  height: 100%;
  background-color: ${props => props.theme.primaryBg};
`

const Counters = styled(Common.FlexWrapper)`
  width: 100%;
`

export const S = { App, Counters }
