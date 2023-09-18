import { FC, useCallback, useEffect } from 'react'
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

  const validateChange = useCallback(
    (minValue: number, maxValue: number) => {
      if (minValue >= maxValue || minValue < 0 || maxValue < 0) {
        setError('Incorrect value(s)')
        return false
      } else {
        setError('')
        return true
      }
    },
    [setError],
  )

  const handleChangeMin = (value: number) => {
    dispatch(toggleDataSet2(false))

    const valueIsMaxSafe = value >= Number.MAX_SAFE_INTEGER

    if (valueIsMaxSafe) {
      dispatch(changeMin2(0))
    } else {
      const resultValidate = validateChange(value, max)
      if (resultValidate) dispatch(changeMin2(value))
    }
  }
  const handleChangeMax = (value: number) => {
    dispatch(toggleDataSet2(false))

    const valueIsMaxSafe = value >= Number.MAX_SAFE_INTEGER

    if (valueIsMaxSafe) {
      dispatch(changeMin2(0))
      dispatch(changeMax2(1))
    } else {
      const resultValidate = validateChange(min, value)
      if (resultValidate) dispatch(changeMax2(value))
    }
  }

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError('')
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [error, setError])

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
