import { ChangeEvent, FC, useState } from 'react'
import { useAppDispatch } from '../../../../app/providers/store-provider/types/store.types'
import { Button } from '../../../../components/button/Button'
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
    <S.Setter $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <S.Form>
        <S.Title>MIN</S.Title>
        <S.Input
          type="number"
          value={min}
          onChange={changeMinHandler}
          placeholder={'enter min'}
          $error={error}
        />
      </S.Form>
      <S.Form>
        <S.Title>MAX</S.Title>
        <S.Input
          type="number"
          value={max}
          onChange={changeMaxHandler}
          placeholder={'enter max'}
          $error={error}
        />
      </S.Form>
      {error && <S.Error>{error}</S.Error>}
      <Button callback={setData} disabled={min >= max || !!error}>
        SET DATA
      </Button>
    </S.Setter>
  )
}
