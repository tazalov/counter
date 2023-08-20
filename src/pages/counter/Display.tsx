import { FC } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button/Button'
import { Common } from '../../components/styled/Common.styled'
import { Frag } from '../../components/styled/Fragments.styled'

type DisplayPT = {
  min: number
  max: number
  current: number
  incr: () => void
  decr: () => void
  reset: () => void
  toggleIsData: () => void
}

export const Display: FC<DisplayPT> = ({ min, max, current, incr, decr, reset, toggleIsData }) => {
  return (
    <StyledDisplay $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <StyledCount current={current} max={max}>
        {current}
      </StyledCount>
      <StyledButtons $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
        <Common.FlexWrapper $align={'center'} $justify={'center'} $gap={'10px'}>
          <Button callback={incr} disabled={current >= max}>
            incr
          </Button>
          <Button callback={decr} disabled={current <= min}>
            decr
          </Button>
        </Common.FlexWrapper>
        <Common.FlexWrapper $align={'center'} $justify={'center'} $gap={'10px'}>
          <Button callback={reset} disabled={current === min}>
            reset
          </Button>
          <Button callback={toggleIsData}>change data</Button>
        </Common.FlexWrapper>
      </StyledButtons>
    </StyledDisplay>
  )
}

type StyledCountT = {
  current: number
  max: number
}

const StyledCount = styled.div<StyledCountT>`
  ${Frag.Border};
  border-radius: 10px;
  color: ${props => (props.current >= props.max ? '#f65757' : props.theme.primaryFont)};
  font-size: 80px;
  text-align: center;
  padding: 10px;
  width: 100%;
`

const StyledDisplay = styled(Common.FlexWrapper)`
  padding: 15px;
`

const StyledButtons = styled(Common.FlexWrapper)`
  ${Frag.Border};
  border-radius: 10px;
  padding: 10px;
`
