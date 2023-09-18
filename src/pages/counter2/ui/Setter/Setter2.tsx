import { ChangeEvent, FC } from 'react'
import { useAppDispatch } from '../../../../app/providers/store-provider/types/store.types'
import { Button } from '../../../../components/button/Button'
import { SetterForm } from '../../../../components/setter-form/SetterForm'
import { changeMax2, changeMin2, toggleDataSet2 } from '../../model/actions/counter2.actions'
import { S } from './Setter2.styled'

type SetterPT = {
  min: number
  max: number
  error: string
  setError: (value: string) => void
}

export const Setter2: FC<SetterPT> = ({ min, max, error, setError }) => {
  const dispatch = useAppDispatch()

  const activateEditMode = () => dispatch(toggleDataSet2(false))
  const deactivateEditMode = () => dispatch(toggleDataSet2(true))

  const changeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    activateEditMode()
    let newMin = +e.currentTarget.value
    const valueIsMaxSafe = min >= Number.MAX_SAFE_INTEGER
    const valueIsNotValid = newMin < 0 || newMin >= max || max < 0 || max <= newMin
    if (valueIsNotValid && !valueIsMaxSafe) {
      setError('Incorrect value(s)')
    } else if (valueIsMaxSafe) {
      dispatch(changeMin2(0))
    } else {
      dispatch(changeMin2(newMin))
      setError('')
    }
  }
  const changeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    activateEditMode()
    let newMax = +e.currentTarget.value
    const valueIsMaxSafe = max >= Number.MAX_SAFE_INTEGER
    const valueIsNotValid = min < 0 || min >= newMax || newMax < 0 || newMax <= min
    if (valueIsNotValid && !valueIsMaxSafe) {
      setError('Incorrect value(s)')
    } else if (valueIsMaxSafe) {
      dispatch(changeMax2(9))
    } else {
      dispatch(changeMax2(newMax))
      setError('')
    }
  }

  return (
    <S.Setter $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <SetterForm
        title={'MIN'}
        value={min}
        onChange={changeMinHandler}
        placeholder={'enter min'}
        error={error}
      />
      <SetterForm
        title={'MAX'}
        value={max}
        onChange={changeMaxHandler}
        placeholder={'enter max'}
        error={error}
      />
      <Button callback={deactivateEditMode} disabled={min >= max || !!error}>
        SET DATA
      </Button>
    </S.Setter>
  )
}
