import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  ChangeDataSet,
  ChangeMax,
  ChangeMin,
  SetError,
} from '../../../../app/model/actions/counter.actions'
import { getError, getMax, getMin } from '../../../../app/model/selectors/counter.selectors'
import { useAppDispatch } from '../../../../app/providers/store-provider/config/store'
import { Common } from '../../../../app/styles/Common.styled'
import { Button } from '../../../../components/button/Button'
import { SetterForm } from '../../../../components/setter-form/SetterForm'
import { validateValues } from '../../../../utils/validators/validateValues'
import { S } from './Setter.styled'

export const Setter: FC = () => {
  console.log('setter')
  const dispatch = useAppDispatch()
  const min = useSelector(getMin)
  const max = useSelector(getMax)
  const error = useSelector(getError)

  const setData = () => dispatch(ChangeDataSet(true))

  const handleChangeMin = (value: number) => {
    const valueIsValid = validateValues(value, max)

    if (valueIsValid) {
      dispatch(ChangeMin(value))
      dispatch(SetError(''))
    } else {
      dispatch(SetError('Attempt to set an incorrect value'))
    }
  }
  const handleChangeMax = (value: number) => {
    const valueIsValid = validateValues(min, value)

    if (valueIsValid) {
      dispatch(ChangeMax(value))
      dispatch(SetError(''))
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
    <Common.FlexWrapper $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <SetterForm title={'MIN'} value={min} changeValue={handleChangeMin} error={error} />
      <SetterForm title={'MAX'} value={max} changeValue={handleChangeMax} error={error} />
      {error && <S.Error>{error}</S.Error>}
      <Button callback={setData} disabled={min >= max || !!error}>
        SET DATA
      </Button>
    </Common.FlexWrapper>
  )
}
