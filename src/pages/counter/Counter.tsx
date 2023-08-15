import { FC, useEffect, useState } from "react";
import { Setter } from "./Setter";
import styled from "styled-components";
import { Display } from "./Display";
import { Frag } from "../../components/styled/Fragments.styled";

export const Counter: FC = ({}) => {
  const [isData, setIsData] = useState<boolean>(false);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const value = localStorage.getItem("counter");
    const min = localStorage.getItem("min");
    const max = localStorage.getItem("max");
    if (value) setCurrent(JSON.parse(value));
    if (min) setMin(JSON.parse(min));
    if (max) setMax(JSON.parse(max));
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(current));
    localStorage.setItem("min", JSON.stringify(min));
    localStorage.setItem("max", JSON.stringify(max));
  }, [current, min, max]);

  const incrCount = () => {
    setCurrent((prev) => {
      const newCurrentValue = prev + 1;
      return newCurrentValue;
    });
  };
  const decrCount = () => {
    setCurrent((prev) => {
      const newCurrentValue = prev - 1;
      return newCurrentValue;
    });
  };
  const reset = () => setCurrent(min);

  const toggleIsData = () => setIsData((prev) => !prev);

  return (
    <StyledCounter>
      <StyledRemove></StyledRemove>
      {!isData && (
        <Setter
          min={min}
          setMin={setMin}
          max={max}
          setMax={setMax}
          setCurrent={setCurrent}
          toggleIsData={toggleIsData}
        />
      )}
      {isData && (
        <Display
          min={min}
          max={max}
          current={current}
          incr={incrCount}
          decr={decrCount}
          reset={reset}
          toggleIsData={toggleIsData}
        />
      )}
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
