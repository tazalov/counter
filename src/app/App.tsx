import { FC, useState } from 'react'
import { Button } from '../components/button/Button'
import { Counter } from '../pages/counter'
import { CounterTwo } from '../pages/counterTwo'
import { S } from './App.styled'

interface AppPT {
  toggleTheme: () => void
}

export const App: FC<AppPT> = ({ toggleTheme }) => {
  console.log('app')
  const [showCounter, setShowCounter] = useState(false)

  const toggleShow = () => setShowCounter(prev => !prev)
  /*localStorage.clear()*/
  return (
    <S.App $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <Button callback={toggleTheme} color={'main'}>
        toggle theme
      </Button>
      <S.Counters $justify={'center'} $gap={'10px'} $wrap={'wrap'} $direction={'column'}>
        {showCounter ? <Counter /> : <CounterTwo />}
      </S.Counters>
      <Button callback={toggleShow} color={'main'}>
        show another counter
      </Button>
    </S.App>
  )
}
