import styled from 'styled-components'
import { Frag } from './Fragments.styled'

const Container = styled.div`
  max-width: 1270px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

interface FlexWrapperPT {
  $direction?: string
  $justify?: string
  $align?: string
  $wrap?: string
  $content?: string
  $gap?: string
}

const FlexWrapper = styled.div<FlexWrapperPT>`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  justify-content: ${props => props.$justify || 'flex-start'};
  align-items: ${props => props.$align || 'stretch'};
  flex-wrap: ${props => props.$wrap || 'nowrap'};
  align-content: ${props => props.$content || 'stretch'};
  gap: ${props => props.$gap || '0px'};
`

const Buttons = styled(FlexWrapper)`
  ${Frag.Border};
  border-radius: 10px;
  padding: 10px;
`

interface StyledCountT {
  $current: number
  $max: number
}

const CounterDisplay = styled.div<StyledCountT>`
  ${Frag.Border};
  border-radius: 10px;
  color: ${props => (props.$current >= props.$max ? '#f65757' : props.theme.primaryFont)};
  font-size: 80px;
  text-align: center;
  padding: 10px;
  width: 100%;
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

export const Common = {
  Container,
  FlexWrapper,
  Buttons,
  CounterDisplay,
  Form,
  Title,
}
