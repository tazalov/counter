import { FC } from 'react'
import { Button } from '../components/button/Button'
import { Counter } from '../pages/counter'
import { Counter2 } from '../pages/counter2/Counter2'
import { S } from './App.styled'

interface AppPT {
  toggleTheme: () => void
}

export const App: FC<AppPT> = ({ toggleTheme }) => {
  /*localStorage.clear();*/
  return (
    <S.App $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <Button callback={toggleTheme} color={'main'}>
        toggle theme
      </Button>
      <S.Counters $justify={'center'} $gap={'10px'} $wrap={'wrap'} $direction={'column'}>
        <Counter />
        {/*        <Counter2 />*/}
      </S.Counters>
    </S.App>
  )
}
