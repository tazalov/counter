import { FC } from 'react'
import { Common } from '../../../../app/styles/Common.styled'
import { DisplayTwo } from '../Display/DisplayTwo'
import { SetterTwo } from '../Setter/SetterTwo'

export const CounterTwo: FC = () => {
  console.log('counter two')

  return (
    <Common.FlexWrapper $gap={'20px'} $justify={'center'}>
      <SetterTwo />
      <DisplayTwo />
    </Common.FlexWrapper>
  )
}
