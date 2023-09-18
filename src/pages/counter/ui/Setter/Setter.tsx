import { FC, useState } from 'react'
import { useAppDispatch } from '../../../../app/providers/store-provider/types/store.types'
import { Common } from '../../../../app/styles/Common.styled'
import { Button } from '../../../../components/button/Button'
import { SetterForm } from '../../../../components/setter-form/SetterForm'
import { changeMax, changeMin } from '../../model/actions/counter.actions'
import { S } from './Setter.styled'

interface SetterPT {
  min: number
  max: number
  toggleIsData: () => void
}

export const Setter: FC<SetterPT> = ({ min, max, toggleIsData }) => {
  const dispatch = useAppDispatch()
  const [error, setError] = useState<string>('')

  const handleChangeMin = (value: number) => {
    const valueIsMaxSafe = min >= Number.MAX_SAFE_INTEGER
    const valueIsNotValid = value < 0 || value >= max || max < 0 || max <= value

    if (valueIsNotValid && !valueIsMaxSafe) {
      setError('Incorrect value(s)')
    } else if (valueIsMaxSafe) {
      dispatch(changeMin(0))
    } else {
      dispatch(changeMin(value))
      setError('')
    }
  }
  const handleChangeMax = (value: number) => {
    const valueIsMaxSafe = max >= Number.MAX_SAFE_INTEGER
    const valueIsNotValid = min < 0 || min >= value || value < 0 || value <= min

    if (valueIsNotValid && !valueIsMaxSafe) {
      setError('Incorrect value(s)')
    } else if (valueIsMaxSafe) {
      dispatch(changeMin(0))
      dispatch(changeMax(9))
    } else {
      dispatch(changeMax(value))
      setError('')
    }
  }

  return (
    <Common.FlexWrapper $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <SetterForm title={'MIN'} value={min} changeValue={handleChangeMin} error={error} />
      <SetterForm title={'MAX'} value={max} changeValue={handleChangeMax} error={error} />
      {error && <S.Error>{error}</S.Error>}
      <Button callback={toggleIsData} disabled={min >= max || !!error}>
        SET DATA
      </Button>
    </Common.FlexWrapper>
  )
}
