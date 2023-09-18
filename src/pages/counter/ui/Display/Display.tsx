import { FC } from 'react'
import { Button } from '../../../../components/button/Button'
import { Common } from '../../../../app/styles/Common.styled'

interface DisplayPT {
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
    <Common.FlexWrapper $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <Common.CounterDisplay $current={current} $max={max}>
        {current}
      </Common.CounterDisplay>
      <Common.Buttons $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
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
      </Common.Buttons>
    </Common.FlexWrapper>
  )
}
