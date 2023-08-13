import {FC, ReactNode} from 'react';
import styled from 'styled-components';

type ButtonPT = {
  children: ReactNode;
  callback: () => void;
  disabled?: boolean;
  color?: 'main' | 'secondary';
};

export const Button: FC<ButtonPT> = ({
  children,
  callback,
  disabled,
  color,
}) => {
  return (
      <StyledButton onClick={callback} disabled={disabled} color={color}>
        {children}
      </StyledButton>
  );
};

const StyledButton = styled.button`
  border: 3px solid ${props => props.color === 'main'
      ? props.theme.secondaryFont
      : props.theme.primaryFont};
  background-color: transparent;
  padding: 10px;
  color: ${props => props.color === 'main'
      ? props.theme.secondaryFont
      : props.theme.primaryFont};
  font-weight: 600;
  border-radius: 10px;
  font-size: 20px;
  text-transform: uppercase;
  
  &:disabled {
    background-color: grey;
    color: white;
  }
`;