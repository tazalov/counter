import styled from "styled-components";
import { useState } from "react";
import { Counter } from "./pages/counter/Counter";
import { Button } from "./components/button/Button";
import { v1 } from "uuid";
import { Common } from "./components/styled/Common.styled";

export type CounterT = {
  id: string;
  minV: number;
  maxV: number;
};

type AppPT = {
  toggleTheme: () => void;
};

function App({ toggleTheme }: AppPT) {
  const [counters, setCounters] = useState<CounterT[]>([
    {
      id: v1(),
      minV: 0,
      maxV: 0,
    },
  ]);
  const addCounter = () => {
    const newCounter = {
      id: v1(),
      minV: 0,
      maxV: 0,
    };
    setCounters([...counters, newCounter]);
  };

  const removeCounter = (counterId: string) => {
    const newCounters = counters.filter((el) => el.id !== counterId);
    setCounters(newCounters);
  };

  return (
    <StyledApp
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={"20px"}
    >
      <Button callback={toggleTheme} color={"main"}>
        toggle theme
      </Button>
      <Button callback={addCounter} color={"main"}>
        Add counter
      </Button>
      <Counters justify={"center"} gap={"10px"} wrap={"wrap"}>
        {counters.map((el) => (
          <Counter
            key={el.id}
            id={el.id}
            minV={el.minV}
            maxV={el.maxV}
            removeCounter={removeCounter}
          />
        ))}
      </Counters>
    </StyledApp>
  );
}

const StyledApp = styled(Common.FlexWrapper)`
  padding: 20px;
  height: 100%;
  background-color: ${(props) => props.theme.primaryBg};
`;

const Counters = styled(Common.FlexWrapper)`
  width: 100%;
`;

export default App;
