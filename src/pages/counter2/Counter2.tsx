import { FC, useEffect, useState } from "react";
import { Setter2 } from "./Setter2";
import styled from "styled-components";
import { Display2 } from "./Display2";
import { Common } from "../../components/styled/Common.styled";

export const Counter2: FC = ({}) => {
  const [isData, setIsData] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [min2, setMin2] = useState<number>(0);
  const [max2, setMax2] = useState<number>(0);
  const [current2, setCurrent2] = useState<number>(0);

  useEffect(() => {
    const value = localStorage.getItem("counter2");
    const min = localStorage.getItem("min2");
    const max = localStorage.getItem("max2");
    if (value) setCurrent2(JSON.parse(value));
    if (min) setMin2(JSON.parse(min));
    if (max) setMax2(JSON.parse(max));
  }, []);

  useEffect(() => {
    localStorage.setItem("counter2", JSON.stringify(current2));
    localStorage.setItem("min2", JSON.stringify(min2));
    localStorage.setItem("max2", JSON.stringify(max2));
  }, [current2, min2, max2]);

  const incrCount = () => {
    setCurrent2((prev) => prev + 1);
  };
  const decrCount = () => {
    setCurrent2((prev) => prev - 1);
  };
  const reset = () => setCurrent2(min2);

  return (
    <StyledCounter $gap={"20px"} $justify={"center"}>
      <StyledRemove></StyledRemove>
      <Setter2
        min={min2}
        setMin={setMin2}
        max={max2}
        setMax={setMax2}
        setCurrent={setCurrent2}
        setIsData={setIsData}
        error={error}
        setError={setError}
      />
      <Display2
        min={min2}
        max={max2}
        current={current2}
        incr={incrCount}
        decr={decrCount}
        reset={reset}
        isData={isData}
        error={error}
      />
    </StyledCounter>
  );
};

const StyledCounter = styled(Common.FlexWrapper)`
  position: relative;
`;

const StyledRemove = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
