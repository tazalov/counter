import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Common } from '../../../../app/styles/Common.styled'
import { Display2 } from '../Display/Display2'
import { getCounter2State } from '../../model/selectors/getCounter2State'
import { Setter2 } from '../Setter/Setter2'

export const Counter2: FC = () => {
  const { min2, max2, dataIsSet2, currentValue2 } = useSelector(getCounter2State)

  const [error, setError] = useState<string>('')

  /*  useEffect(() => {
    const value = localStorage.getItem('counter2')
    const min = localStorage.getItem('min2')
    const max = localStorage.getItem('max2')
    if (value) setCurrent2(JSON.parse(value))
    if (min) setMin2(JSON.parse(min))
    if (max) setMax2(JSON.parse(max))
  }, [])

  useEffect(() => {
    localStorage.setItem('counter2', JSON.stringify(current2))
    localStorage.setItem('min2', JSON.stringify(min2))
    localStorage.setItem('max2', JSON.stringify(max2))
  }, [current2, min2, max2])*/

  return (
    <Common.FlexWrapper $gap={'20px'} $justify={'center'}>
      <Setter2 min={min2} max={max2} error={error} setError={setError} />
      <Display2
        min={min2}
        max={max2}
        current={currentValue2}
        dataIsSet={dataIsSet2}
        error={error}
      />
    </Common.FlexWrapper>
  )
}
