import styled, {ThemeProvider} from 'styled-components';
import {useState} from 'react';
import {darkTheme, lightTheme, ThemeT} from './styles/Theme';
import {Counter} from './pages/counter/Counter';
import {Button} from './pages/components/button/Button';

export type CounterT = {
  id: number;
  minV: number;
  maxV: number;
}

//! подключи пакет для id!
function App() {
  const [theme, setTheme] = useState<ThemeT>(lightTheme);
  const toggleTheme = () => setTheme(
      prev => prev === lightTheme ? darkTheme : lightTheme);
  
  const [counters, setCounters] = useState<CounterT[]>(
      [
        {
          id: 1,
          minV: 0,
          maxV: 0,
        }],
  );
  const addCounter = () => {
    const newCounter = {
      id: counters.length + 1,
      minV: 0,
      maxV: 0,
    };
    setCounters([...counters, newCounter]);
  };
  
  const removeCounter = (counterId: number) => {
    const newCounters = counters.filter(el => el.id !== counterId);
    setCounters(newCounters);
  };
  
  return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Button callback={toggleTheme} color={'main'}>
            toggle theme
          </Button>
          <Button callback={addCounter} color={'main'}>
            Add counter
          </Button>
          <Counters>
            {counters.map(el => <Counter key={el.id} id={el.id} minV={el.minV}
                                         maxV={el.maxV}
                                         removeCounter={removeCounter}/>)}
          </Counters>
        </StyledApp>
      </ThemeProvider>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.primaryBg};
  gap: 20px;
`;

const Counters = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export default App;
