import { FC } from 'react'
import { useAppDispatch } from '../../../../app/providers/store-provider/types/store.types'
import { Button } from '../../../../components/button/Button'
import { Common } from '../../../../app/styles/Common.styled'
import { decrement, increment, resetData } from '../../model/actions/counter.actions'

interface DisplayPT {
  min: number
  max: number
  current: number
  toggleIsData: () => void
}

export const Display: FC<DisplayPT> = ({ min, max, current, toggleIsData }) => {
  const dispatch = useAppDispatch()

  const incrCount = () => dispatch(increment())
  const decrCount = () => dispatch(decrement())
  const reset = () => dispatch(resetData())
  return (
    <Common.FlexWrapper $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <Common.CounterDisplay $current={current} $max={max}>
        {current}
      </Common.CounterDisplay>
      <Common.Buttons $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
        <Common.FlexWrapper $align={'center'} $justify={'center'} $gap={'10px'}>
          <Button callback={incrCount} disabled={current >= max}>
            incr
          </Button>
          <Button callback={decrCount} disabled={current <= min}>
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
