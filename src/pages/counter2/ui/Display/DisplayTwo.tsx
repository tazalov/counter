import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Decrement, Increment, ResetData } from '../../../../app/model/actions/counter.actions'
import {
  getCurrent,
  getError,
  getIsDataSet,
  getMax,
  getMin,
} from '../../../../app/model/selectors/counter.selectors'
import { useAppDispatch } from '../../../../app/providers/store-provider/config/store'
import { Button } from '../../../../components/button/Button'
import { Common } from '../../../../app/styles/Common.styled'
import { S } from './DisplayTwo.styled'

export const DisplayTwo: FC = () => {
  console.log('display two')
  const dispatch = useAppDispatch()

  const incrCount = () => dispatch(Increment())
  const decrCount = () => dispatch(Decrement())
  const reset = () => dispatch(ResetData())

  const min = useSelector(getMin)
  const max = useSelector(getMax)
  const current = useSelector(getCurrent)
  const error = useSelector(getError)
  const dataIsSet = useSelector(getIsDataSet)

  return (
    <S.Display $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      {error ? (
        <S.Error>{error}</S.Error>
      ) : !dataIsSet ? (
        <S.Text>input data in counter</S.Text>
      ) : (
        <>
          <Common.CounterDisplay $current={current} $max={max}>
            {current}
          </Common.CounterDisplay>
          <Common.Buttons $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
            <Common.FlexWrapper $align={'center'} $justify={'center'} $gap={'10px'}>
              <Button callback={incrCount} disabled={!dataIsSet || current >= max}>
                incr
              </Button>
              <Button callback={decrCount} disabled={!dataIsSet || current <= min}>
                decr
              </Button>
              <Button callback={reset} disabled={!dataIsSet || current === min}>
                reset
              </Button>
            </Common.FlexWrapper>
          </Common.Buttons>
        </>
      )}
    </S.Display>
  )
}
