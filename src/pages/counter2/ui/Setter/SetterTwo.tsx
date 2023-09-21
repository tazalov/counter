import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  ChangeDataSet,
  ChangeMax,
  ChangeMin,
  SetError,
} from '../../../../app/model/actions/counter.actions'
import { getError, getMax, getMin } from '../../../../app/model/selectors/counter.selectors'
import { useAppDispatch } from '../../../../app/providers/store-provider/config/store'
import { Button } from '../../../../components/button/Button'
import { SetterForm } from '../../../../components/setter-form/SetterForm'
import { validateValues } from '../../../../utils/validators/validateValues'
import { S } from './SetterTwo.styled'

export const SetterTwo: FC = () => {
  console.log('setter two')
  const min = useSelector(getMin)
  const max = useSelector(getMax)
  const error = useSelector(getError)

  const [currentMin, setCurrentMin] = useState(min)
  const [currentMax, setCurrentMax] = useState(max)

  const dispatch = useAppDispatch()

  const activateEditMode = () => dispatch(ChangeDataSet(false))

  const setData = () => {
    dispatch(ChangeDataSet(true))
    dispatch(ChangeMin(currentMin))
    dispatch(ChangeMax(currentMax))
  }

  const handleChangeMin = (value: number) => {
    activateEditMode()
    const valueIsValid = validateValues(value, currentMax)

    if (valueIsValid) {
      setCurrentMin(value)
    } else {
      dispatch(SetError('Attempt to set an incorrect value'))
    }
  }
  const handleChangeMax = (value: number) => {
    activateEditMode()
    const valueIsValid = validateValues(currentMin, value)

    if (valueIsValid) {
      setCurrentMax(value)
    } else {
      dispatch(SetError('Attempt to get an incorrect value'))
    }
  }

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        dispatch(SetError(''))
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [error, dispatch])

  return (
    <S.Setter $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <SetterForm title={'MIN'} value={currentMin} changeValue={handleChangeMin} error={error} />
      <SetterForm title={'MAX'} value={currentMax} changeValue={handleChangeMax} error={error} />
      <Button callback={setData} disabled={currentMin >= currentMax || !!error}>
        SET DATA
      </Button>
    </S.Setter>
  )
}
