import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { Common } from "../../components/styled/Common.styled";
import { Frag } from "../../components/styled/Fragments.styled";

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
    <StyledSetter
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={"20px"}
    >
      <StyledForm>
        <StyledTitle>MIN</StyledTitle>
        <StyledInput
          type="number"
          value={min || ""}
          onChange={changeMinHandler}
          placeholder={"enter min"}
        />
      </StyledForm>
      <StyledForm>
        <StyledTitle>MAX</StyledTitle>
        <StyledInput
          type="number"
          value={max || ""}
          onChange={changeMaxHandler}
          placeholder={"enter max"}
        />
      </StyledForm>
      <Button callback={toggleIsData}>SET DATA</Button>
    </StyledSetter>
  );
};

const StyledSetter = styled(Common.FlexWrapper)`
  padding: 15px;
`;

const StyledForm = styled.div`
  ${Frag.Border};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
`;

const StyledInput = styled.input`
  ${Frag.Border};
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  font-size: 25px;
  color: ${(props) => props.theme.primaryFont};
  background-color: ${(props) => props.theme.secondaryBg};
  &:focus-visible {
    outline: 5px solid grey;
  }
  &::placeholder {
    color: ${(props) => props.theme.primaryFont};
  }
`;

const StyledTitle = styled.h3`
  ${Frag.Subtitle}
  color: ${(props) => props.theme.primaryFont};
  margin-bottom: 10px;
`;
