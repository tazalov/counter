import {FC, useState} from 'react';
import styled from 'styled-components';
import {Button} from '../components/button/Button';

type DisplayPT = {
  min: number;
  max: number;
  toggleIsData: () => void;
};

export const Display: FC<DisplayPT> = ({
  min,
  max,
  toggleIsData,
}) => {
  const [count, setCount] = useState<number>(min);
  const incrCount = () => setCount(prev => prev + 1);
  const decrCount = () => setCount(prev => prev - 1);
  const reset = () => setCount(min);
  return (
      <StyledDisplay>
        <StyledCount current={count} max={max}>{count}</StyledCount>
        <StyledButtons>
          <Button callback={incrCount} disabled={count >= max}>
            incr
          </Button>
          <Button callback={decrCount} disabled={count <= min}>
            decr
          </Button>
          <Button callback={reset}  disabled={count === min}>
            reset
          </Button>
          <Button callback={toggleIsData}>
            change data
          </Button>
        </StyledButtons>
      </StyledDisplay>
  );
};

type StyledCountT = {
  current: number;
  max: number;
}

const StyledCount = styled.div<StyledCountT>`
  color: ${props => props.current >= props.max
      ? 'red'
      : props.theme.primaryFont};
  font-size: 100px;
  text-align: center;
  width: 100%;
  border: 5px solid ${props => props.theme.primaryBg};
  border-radius: 10px;
`;

const StyledDisplay = styled.div`
  border-radius: 10px;
  padding: 30px;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  background-color: ${props => props.theme.secondaryBg};
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  border: 5px solid ${props => props.theme.primaryBg};
  border-radius: 10px;
  width: 100%;
  padding: 20px 0;
`;