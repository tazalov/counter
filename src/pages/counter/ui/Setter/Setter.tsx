import { ChangeEvent, FC, useState } from 'react'
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

  const changeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newMin = +e.currentTarget.value
    const valueIsMaxSafe = min >= Number.MAX_SAFE_INTEGER
    const valueIsNotValid = newMin < 0 || newMin >= max || max < 0 || max <= newMin
    if (valueIsNotValid && !valueIsMaxSafe) {
      setError('Incorrect value(s)')
    } else if (valueIsMaxSafe) {
      dispatch(changeMin(0))
    } else {
      dispatch(changeMin(newMin))
      setError('')
    }
  }
  const changeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newMax = +e.currentTarget.value
    const valueIsMaxSafe = max >= Number.MAX_SAFE_INTEGER
    const valueIsNotValid = min < 0 || min >= newMax || newMax < 0 || newMax <= min
    if (valueIsNotValid && !valueIsMaxSafe) {
      setError('Incorrect value(s)')
    } else if (valueIsMaxSafe) {
      dispatch(changeMax(9))
    } else {
      dispatch(changeMax(newMax))
      setError('')
    }
  }

  const setData = () => {
    toggleIsData()
  }
  return (
    <Common.FlexWrapper $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
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
      {error && <S.Error>{error}</S.Error>}
      <Button callback={setData} disabled={min >= max || !!error}>
        SET DATA
      </Button>
    </Common.FlexWrapper>
  )
}
