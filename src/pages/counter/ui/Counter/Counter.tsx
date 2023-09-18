import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../../app/providers/store-provider/types/store.types'
import { toggleDataSet } from '../../model/actions/counter.actions'
import { getCounterState } from '../../model/selectors/getCounterState'
import { Display } from '../Display/Display'
import { Setter } from '../Setter/Setter'
import { S } from './Counter.styled'

export const Counter: FC = () => {
  const dispatch = useAppDispatch()
  const { min, max, dataIsSet, currentValue } = useSelector(getCounterState)

  /*  useEffect(() => {
    const value = localStorage.getItem('counter')
    const min = localStorage.getItem('min')
    const max = localStorage.getItem('max')
    if (value) setCurrent(JSON.parse(value))
    if (min) setMin(JSON.parse(min))
    if (max) setMax(JSON.parse(max))
  }, [])

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(current))
    localStorage.setItem('min', JSON.stringify(min))
    localStorage.setItem('max', JSON.stringify(max))
  }, [current, min, max])*/

  const toggleIsData = () => dispatch(toggleDataSet())

  return (
    <S.Counter>
      {!dataIsSet && <Setter min={min} max={max} toggleIsData={toggleIsData} />}
      {dataIsSet && (
        <Display min={min} max={max} current={currentValue} toggleIsData={toggleIsData} />
      )}
    </S.Counter>
  )
}
