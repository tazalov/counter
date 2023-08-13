import { css } from "styled-components";

const Subtitle = css`
  font-size: 30px;
  font-weight: 600;
  user-select: none;
`;

const Shadow = css`
  box-shadow: 0 0 10px 0 ${(props) => props.theme.secondaryShadow};
`;

const Border = css`
  border: 3px solid ${(props) => props.theme.primaryBg};
`;

export const Frag = {
  Subtitle,
  Shadow,
  Border,
};
