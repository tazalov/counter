import {ChangeEvent, FC} from 'react';
import styled from 'styled-components';
import {Button} from '../components/button/Button';

type SetterPT = {
  min: number;
  max: number;
  setMin: (value: number) => void;
  setMax: (value: number) => void;
  toggleIsData: () => void;
};

export const Setter: FC<SetterPT> = ({
  min,
  max,
  setMin,
  setMax,
  toggleIsData,
}) => {
  const changeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMin(+e.currentTarget.value);
  };
  const changeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(+e.currentTarget.value);
  };
  return (
      <StyledSetter>
        <StyledBlock>
          <StyledTitle>MIN</StyledTitle>
          <StyledInput type="number" value={min || ''} onChange={changeMinHandler} placeholder={'enter min'}/>
        </StyledBlock>
        <StyledBlock>
          <StyledTitle>MAX</StyledTitle>
          <StyledInput type="number" value={max || ''} onChange={changeMaxHandler} placeholder={'enter max'}/>
        </StyledBlock>
        <Button callback={toggleIsData}>
          SET DATA
        </Button>
      </StyledSetter>
  );
};

const StyledSetter = styled.div`
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

const StyledBlock = styled.div`
  border: 5px solid ${props => props.theme.primaryBg};
  border-radius: 10px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledInput = styled.input`
  padding: 10px;
  background-color: ${props => props.theme.primaryBg};
  border-radius: 10px;
  border: none;
  font-size: 40px;
  color: ${props => props.theme.secondaryFont};
  &:focus-visible {
    outline: 5px solid grey;
  }
`;

const StyledTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.primaryFont};
  font-size: 50px;
`;