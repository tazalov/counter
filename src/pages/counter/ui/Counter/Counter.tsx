import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getIsDataSet } from '../../../../app/model/selectors/counter.selectors'
import { Display } from '../Display/Display'
import { Setter } from '../Setter/Setter'
import { S } from './Counter.styled'

export const Counter: FC = () => {
  console.log('counter')

  const dataIsSet = useSelector(getIsDataSet)

  return (
    <S.Counter>
      {!dataIsSet && <Setter />}
      {dataIsSet && <Display />}
    </S.Counter>
  )
}
