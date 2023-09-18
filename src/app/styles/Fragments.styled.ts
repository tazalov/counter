import { css } from 'styled-components'

const Subtitle = css`
  font-size: 30px;
  font-weight: 600;
  user-select: none;
`

const Shadow = css`
  box-shadow: 0 0 10px 0 ${props => props.theme.secondaryShadow};
`

const Border = css`
  border: 3px solid ${props => props.theme.primaryBg};
`

const Text = css`
  padding: 5px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`

const CounterBlock = css`
  ${Shadow};
  border-radius: 10px;
  background-color: ${props => props.theme.secondaryBg};
  padding: 10px;
  max-width: min-content;
  min-width: 400px;
`

export const Frag = {
  Subtitle,
  Shadow,
  Border,
  Text,
  CounterBlock,
}
