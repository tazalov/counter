import { FC, useState } from "react";
import { Setter } from "./Setter";
import styled from "styled-components";
import { Display } from "./Display";
import { CounterT } from "../../App";
import { Button } from "../../components/button/Button";
import { Frag } from "../../components/styled/Fragments.styled";

type CounterPT = {
  removeCounter: (counterId: string) => void;
};

export const Counter: FC<CounterT & CounterPT> = ({
  id,
  minV,
  maxV,
  removeCounter,
}) => {
  const [isData, setIsData] = useState<boolean>(false);
  const [min, setMin] = useState<number>(minV);
  const [max, setMax] = useState<number>(maxV);
  const toggleIsData = () => setIsData((prev) => !prev);
  const remove = () => removeCounter(id);
  return (
    <StyledCounter>
      <StyledRemove>
        <Button callback={remove} $border={false}>
          X
        </Button>
      </StyledRemove>
      {!isData && (
        <Setter
          min={min}
          setMin={setMin}
          max={max}
          setMax={setMax}
          toggleIsData={toggleIsData}
        />
      )}
      {isData && <Display min={min} max={max} toggleIsData={toggleIsData} />}
    </StyledCounter>
  );
};

const StyledCounter = styled.div`
  ${Frag.Shadow};
  border-radius: 10px;
  background-color: ${(props) => props.theme.secondaryBg};
  padding: 10px;
  position: relative;
`;

const StyledRemove = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
