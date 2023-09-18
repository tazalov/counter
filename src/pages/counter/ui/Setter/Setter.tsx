import { FC } from 'react'
import { useAppDispatch } from '../../../../app/providers/store-provider/types/store.types'
import { Common } from '../../../../app/styles/Common.styled'
import { Button } from '../../../../components/button/Button'
import { SetterForm } from '../../../../components/setter-form/SetterForm'
import { useMinMaxValidation } from '../../../../utils/hooks/useMinMaxValidation'
import { changeMax, changeMin } from '../../model/actions/counter.actions'
import { S } from './Setter.styled'

interface SetterPT {
  min: number
  max: number
  toggleIsData: () => void
}

export const Setter: FC<SetterPT> = ({ min, max, toggleIsData }) => {
  const dispatch = useAppDispatch()
  const { error, validateChange } = useMinMaxValidation()

  const handleChangeMin = (value: number) => {
    const minIsMaxSafe = value >= Number.MAX_SAFE_INTEGER

    if (minIsMaxSafe) {
      dispatch(changeMin(0))
    } else {
      const resultValidate = validateChange(value, max)
      if (resultValidate) dispatch(changeMin(value))
    }
  }
  const handleChangeMax = (value: number) => {
    const maxIsMaxSafe = value >= Number.MAX_SAFE_INTEGER

    if (maxIsMaxSafe) {
      dispatch(changeMin(0))
      dispatch(changeMax(1))
    } else {
      const resultValidate = validateChange(min, value)
      if (resultValidate) dispatch(changeMax(value))
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
