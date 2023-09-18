import { FC } from 'react'
import { useAppDispatch } from '../../../../app/providers/store-provider/types/store.types'
import { Button } from '../../../../components/button/Button'
import { SetterForm } from '../../../../components/setter-form/SetterForm'
import { changeMax2, changeMin2, toggleDataSet2 } from '../../model/actions/counter2.actions'
import { S } from './Setter2.styled'

interface SetterPT {
  min: number
  max: number
  error: string
  setError: (value: string) => void
}

export const Setter2: FC<SetterPT> = ({ min, max, error, setError }) => {
  const dispatch = useAppDispatch()

  const deactivateEditMode = () => dispatch(toggleDataSet2(true))

  const handleChangeMin = (value: number) => {
    dispatch(toggleDataSet2(false))

    const valueIsMaxSafe = min >= Number.MAX_SAFE_INTEGER
    const valueIsNotValid = value < 0 || value >= max || max < 0 || max <= value

    if (valueIsNotValid && !valueIsMaxSafe) {
      setError('Incorrect value(s)')
    } else if (valueIsMaxSafe) {
      dispatch(changeMin2(0))
    } else {
      dispatch(changeMin2(value))
      setError('')
    }
  }
  const handleChangeMax = (value: number) => {
    dispatch(toggleDataSet2(false))

    const valueIsMaxSafe = max >= Number.MAX_SAFE_INTEGER
    const valueIsNotValid = min < 0 || min >= value || value < 0 || value <= min

    if (valueIsNotValid && !valueIsMaxSafe) {
      setError('Incorrect value(s)')
    } else if (valueIsMaxSafe) {
      dispatch(changeMin2(0))
      dispatch(changeMax2(9))
    } else {
      dispatch(changeMax2(value))
      setError('')
    }
  }

  return (
    <S.Setter $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <SetterForm title={'MIN'} value={min} changeValue={handleChangeMin} error={error} />
      <SetterForm title={'MAX'} value={max} changeValue={handleChangeMax} error={error} />
      <Button callback={deactivateEditMode} disabled={min >= max || !!error}>
        SET DATA
      </Button>
    </S.Setter>
  )
}
