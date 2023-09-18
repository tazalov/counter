import { FC } from 'react'
import { Button } from '../../../../components/button/Button'
import { Common } from '../../../../app/styles/Common.styled'
import { S } from './Display2.styled'

interface DisplayPT {
  min: number
  max: number
  current: number
  incr: () => void
  decr: () => void
  reset: () => void
  dataIsSet: boolean
  error: string
}

export const Display2: FC<DisplayPT> = ({
  min,
  max,
  current,
  incr,
  decr,
  reset,
  dataIsSet,
  error,
}) => {
  return (
    <S.Display $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      {error ? (
        <S.Error>{error}</S.Error>
      ) : !dataIsSet ? (
        <S.Text>input data in counter</S.Text>
      ) : (
        <>
          <S.Count $current={current} $max={max}>
            {current}
          </S.Count>
          <S.Buttons $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
            <Common.FlexWrapper $align={'center'} $justify={'center'} $gap={'10px'}>
              <Button callback={incr} disabled={!dataIsSet || current >= max}>
                incr
              </Button>
              <Button callback={decr} disabled={!dataIsSet || current <= min}>
                decr
              </Button>
              <Button callback={reset} disabled={!dataIsSet || current === min}>
                reset
              </Button>
            </Common.FlexWrapper>
          </S.Buttons>
        </>
      )}
    </S.Display>
  )
}
