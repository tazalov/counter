import { FC, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { Frag } from "../../components/styled/Fragments.styled";
import { Common } from "../../components/styled/Common.styled";

type DisplayPT = {
  min: number;
  max: number;
  toggleIsData: () => void;
};

export const Display: FC<DisplayPT> = ({ min, max, toggleIsData }) => {
  const [count, setCount] = useState<number>(min);
  const incrCount = () => setCount((prev) => prev + 1);
  const decrCount = () => setCount((prev) => prev - 1);
  const reset = () => setCount(min);
  return (
    <StyledDisplay
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={"20px"}
    >
      <StyledCount current={count} max={max}>
        {count}
      </StyledCount>
      <StyledButtons
        direction={"column"}
        align={"center"}
        justify={"center"}
        gap={"20px"}
      >
        <Common.FlexWrapper align={"center"} justify={"center"} gap={"10px"}>
          <Button callback={incrCount} disabled={count >= max}>
            incr
          </Button>
          <Button callback={decrCount} disabled={count <= min}>
            decr
          </Button>
        </Common.FlexWrapper>
        <Common.FlexWrapper align={"center"} justify={"center"} gap={"10px"}>
          <Button callback={reset} disabled={count === min}>
            reset
          </Button>
          <Button callback={toggleIsData}>change data</Button>
        </Common.FlexWrapper>
      </StyledButtons>
    </StyledDisplay>
  );
};

type StyledCountT = {
  current: number;
  max: number;
};

const StyledCount = styled.div<StyledCountT>`
  ${Frag.Border};
  border-radius: 10px;
  color: ${(props) =>
    props.current >= props.max ? "#f65757" : props.theme.primaryFont};
  font-size: 80px;
  text-align: center;
  padding: 10px;
  width: 100%;
`;

const StyledDisplay = styled(Common.FlexWrapper)`
  padding: 15px;
`;

const StyledButtons = styled(Common.FlexWrapper)`
  ${Frag.Border};
  border-radius: 10px;
  padding: 10px;
`;
