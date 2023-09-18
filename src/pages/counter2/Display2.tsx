import { FC } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button/Button'
import { Common } from '../../app/styles/Common.styled'
import { Frag } from '../../app/styles/Fragments.styled'

type DisplayPT = {
  min: number
  max: number
  current: number
  incr: () => void
  decr: () => void
  reset: () => void
  isData: boolean
  error: string
}

export const Display2: FC<DisplayPT> = ({
  min,
  max,
  current,
  incr,
  decr,
  reset,
  isData,
  error,
}) => {
  return (
    <StyledDisplay $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      {error ? (
        <StyledError>{error}</StyledError>
      ) : isData ? (
        <StyledText>input data in counter</StyledText>
      ) : (
        <StyledCount current={current} max={max}>
          {current}
        </StyledCount>
      )}
      <StyledButtons $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
        <Common.FlexWrapper $align={'center'} $justify={'center'} $gap={'10px'}>
          <Button callback={incr} disabled={isData || current >= max}>
            incr
          </Button>
          <Button callback={decr} disabled={isData || current <= min}>
            decr
          </Button>
          <Button callback={reset} disabled={isData || current === min}>
            reset
          </Button>
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
  ${Frag.Shadow};
  border-radius: 10px;
  background-color: ${props => props.theme.secondaryBg};
  padding: 10px;
`

const StyledButtons = styled(Common.FlexWrapper)`
  ${Frag.Border};
  border-radius: 10px;
  padding: 10px;
`

const StyledError = styled.div`
  ${Frag.Text};
  color: #f65757;
`

const StyledText = styled.div`
  ${Frag.Text};
`
