import { FC } from 'react'
import { useAppDispatch } from '../../../../app/providers/store-provider/types/store.types'
import { Button } from '../../../../components/button/Button'
import { Common } from '../../../../app/styles/Common.styled'
import { decrement2, increment2, resetData2 } from '../../model/actions/counter2.actions'
import { S } from './Display2.styled'

interface DisplayPT {
  min: number
  max: number
  current: number
  dataIsSet: boolean
  error: string
}

export const Display2: FC<DisplayPT> = ({ min, max, current, dataIsSet, error }) => {
  const dispatch = useAppDispatch()

  const incrCount = () => dispatch(increment2())
  const decrCount = () => dispatch(decrement2())
  const reset = () => dispatch(resetData2())
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
