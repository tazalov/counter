import { FC } from 'react'
import { Button } from '../../../../components/button/Button'
import { Common } from '../../../../app/styles/Common.styled'
import { S } from './Display.styled'

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
    <S.Display $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <S.Count $current={current} $max={max}>
        {current}
      </S.Count>
      <S.Buttons $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
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
      </S.Buttons>
    </S.Display>
  )
}
