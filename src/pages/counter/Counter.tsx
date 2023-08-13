import {FC, useState} from 'react';
import {Setter} from './Setter';
import styled from 'styled-components';
import {Display} from './Display';
import {CounterT} from '../../App';
import {Button} from '../components/button/Button';

type CounterPT = {
  removeCounter: (counterId: number) => void;
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
  const toggleIsData = () => setIsData(prev => !prev);
  const remove = () => removeCounter(id);
  return (
      <StyledCounter>
        <StyledWrapper>
          <Button callback={remove}>
            remove
          </Button>
          {!isData &&
              <Setter min={min} setMin={setMin} max={max} setMax={setMax}
                      toggleIsData={toggleIsData}/>}
          {isData && <Display min={min} max={max} toggleIsData={toggleIsData}/>}
        </StyledWrapper>
      </StyledCounter>
  );
};

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  border-radius: 10px;
  padding: 30px;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  background-color: ${props => props.theme.secondaryBg};
`;