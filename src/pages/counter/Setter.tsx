import { ChangeEvent, FC, useState } from "react";
import styled, { css } from "styled-components";
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
  const [error, setError] = useState<string>("");

  const changeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMin = +e.currentTarget.value;
    setMin(newMin);
    setError(newMin >= max ? "Min value can not be more than max value" : "");
  };
  const changeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMax = +e.currentTarget.value;
    setMax(newMax);
    setError(newMax <= min ? "Max value can not be more min value" : "");
  };
  return (
    <StyledSetter
      $direction={"column"}
      $align={"center"}
      $justify={"center"}
      $gap={"20px"}
    >
      <StyledForm>
        <StyledTitle>MIN</StyledTitle>
        <StyledInput
          type="number"
          value={min || ""}
          onChange={changeMinHandler}
          placeholder={"enter min"}
          $error={error}
        />
      </StyledForm>
      <StyledForm>
        <StyledTitle>MAX</StyledTitle>
        <StyledInput
          type="number"
          value={max || ""}
          onChange={changeMaxHandler}
          placeholder={"enter max"}
          $error={error}
        />
      </StyledForm>
      {error && <StyledError>{error}</StyledError>}
      <Button callback={toggleIsData} disabled={min >= max}>
        SET DATA
      </Button>
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

const StyledTitle = styled.h3`
  ${Frag.Subtitle}
  color: ${(props) => props.theme.primaryFont};
  margin-bottom: 10px;
  text-align: center;
`;

const StyledInput = styled.input<{ $error: string }>`
  ${Frag.Border};
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  font-size: 25px;
  color: ${(props) => props.theme.primaryFont};
  background-color: ${(props) => props.theme.secondaryBg};
  &:focus-visible {
    outline: 2px solid ${(props) => (props.$error ? "#f65757" : "grey")};
  }
  &::placeholder {
    color: ${(props) => props.theme.primaryFont};
  }
  ${(props) =>
    props.$error &&
    css`
      border: 3px solid #f65757;
    `}
`;

const StyledError = styled.div`
  padding: 5px;
  color: #f65757;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;
