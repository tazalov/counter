import styled from "styled-components";
import { Counter } from "./pages/counter/Counter";
import { Button } from "./components/button/Button";
import { Common } from "./components/styled/Common.styled";
import { Counter2 } from "./pages/counter2/Counter2";

type AppPT = {
  toggleTheme: () => void;
};

function App({ toggleTheme }: AppPT) {
  return (
    <StyledApp
      $direction={"column"}
      $align={"center"}
      $justify={"center"}
      $gap={"20px"}
    >
      <Button callback={toggleTheme} color={"main"}>
        toggle theme
      </Button>
      <Counters
        $justify={"center"}
        $gap={"10px"}
        $wrap={"wrap"}
        $direction={"column"}
      >
        <Counter />
        <Counter2 />
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
