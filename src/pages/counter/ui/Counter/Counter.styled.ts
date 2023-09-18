import styled from 'styled-components'
import { Frag } from '../../../../app/styles/Fragments.styled'

const Counter = styled.div`
  ${Frag.Shadow};
  border-radius: 10px;
  background-color: ${props => props.theme.secondaryBg};
  padding: 10px;
  position: relative;
  max-width: min-content;
  min-width: 400px;
  margin: 0 auto;
`

export const S = { Counter }
