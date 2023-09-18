import { ChangeEvent, FC } from 'react'
import { Common } from '../../app/styles/Common.styled'

type SetterFormPT = {
  title: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  error: string
}

export const SetterForm: FC<SetterFormPT> = ({ title, value, onChange, error }) => {
  return (
    <Common.Form>
      <Common.Title>{title}</Common.Title>
      <Common.Input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={'enter min'}
        $error={error}
      />
    </Common.Form>
  )
}
