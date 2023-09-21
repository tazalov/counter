import { FC } from 'react'
import { useSelector } from 'react-redux'
import {
  ChangeDataSet,
  Decrement,
  Increment,
  ResetData,
} from '../../../../app/model/actions/counter.actions'
import { getCurrent, getMax, getMin } from '../../../../app/model/selectors/counter.selectors'
import { useAppDispatch } from '../../../../app/providers/store-provider/config/store'
import { Button } from '../../../../components/button/Button'
import { Common } from '../../../../app/styles/Common.styled'

export const Display: FC = () => {
  console.log('display')
  const dispatch = useAppDispatch()

  const min = useSelector(getMin)
  const max = useSelector(getMax)
  const current = useSelector(getCurrent)

  const changeData = () => dispatch(ChangeDataSet(false))

  const incrCount = () => dispatch(Increment())
  const decrCount = () => dispatch(Decrement())
  const reset = () => dispatch(ResetData())
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
          <Button callback={changeData}>change data</Button>
        </Common.FlexWrapper>
      </Common.Buttons>
    </Common.FlexWrapper>
  )
}
