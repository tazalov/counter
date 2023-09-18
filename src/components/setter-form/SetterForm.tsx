import { FC } from 'react'
import { Common } from '../../app/styles/Common.styled'
import { Input } from '../input/Input'

type SetterFormPT = {
  title: string
  value: number
  changeValue: (value: number) => void
  error: string
}

export const SetterForm: FC<SetterFormPT> = ({ title, value, changeValue, error }) => {
  return (
    <Common.Form>
      <Common.Title>{title}</Common.Title>
      <Input type={'number'} value={value} changeValue={changeValue} error={!!error} />
    </Common.Form>
  )
}
