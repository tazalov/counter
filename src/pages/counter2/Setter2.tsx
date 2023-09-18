import { ChangeEvent, FC } from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../../components/button/Button'
import { Common } from '../../app/styles/Common.styled'
import { Frag } from '../../app/styles/Fragments.styled'

type SetterPT = {
  min: number
  max: number
  setMin: (value: number) => void
  setMax: (value: number) => void
  setCurrent: (value: number) => void
  setIsData: (value: boolean) => void
  error: string
  setError: (value: string) => void
}

export const Setter2: FC<SetterPT> = ({
  min,
  max,
  setMin,
  setMax,
  setCurrent,
  setIsData,
  error,
  setError,
}) => {
  const changeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsData(true)
    const newMin = +e.currentTarget.value
    setMin(newMin)
    setCurrent(newMin)
    setError(newMin < 0 || newMin >= max || max < 0 || max <= newMin ? 'Incorrect value(s)' : '')
  }
  const changeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsData(true)
    const newMax = +e.currentTarget.value
    setMax(newMax)
    setError(min < 0 || min >= newMax || newMax < 0 || newMax <= min ? 'Incorrect value(s)' : '')
  }

  return (
    <StyledSetter $direction={'column'} $align={'center'} $justify={'center'} $gap={'20px'}>
      <StyledForm>
        <StyledTitle>MIN</StyledTitle>
        <StyledInput
          type="number"
          value={min}
          onChange={changeMinHandler}
          placeholder={'enter min'}
          $error={error}
        />
      </StyledForm>
      <StyledForm>
        <StyledTitle>MAX</StyledTitle>
        <StyledInput
          type="number"
          value={max}
          onChange={changeMaxHandler}
          placeholder={'enter max'}
          $error={error}
        />
      </StyledForm>
      <Button callback={() => setIsData(false)} disabled={min >= max || !!error}>
        SET DATA
      </Button>
    </StyledSetter>
  )
}

const StyledSetter = styled(Common.FlexWrapper)`
  ${Frag.Shadow};
  border-radius: 10px;
  background-color: ${props => props.theme.secondaryBg};
  padding: 10px;
`

const StyledForm = styled.div`
  ${Frag.Border};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
`

const StyledTitle = styled.h3`
  ${Frag.Subtitle}
  color: ${props => props.theme.primaryFont};
  margin-bottom: 10px;
  text-align: center;
`

const StyledInput = styled.input<{ $error: string }>`
  ${Frag.Border};
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  font-size: 25px;
  color: ${props => props.theme.primaryFont};
  background-color: ${props => props.theme.secondaryBg};
  &:focus-visible {
    outline: 2px solid ${props => (props.$error ? '#f65757' : 'grey')};
  }
  &::placeholder {
    color: ${props => props.theme.primaryFont};
  }
  ${props =>
    props.$error &&
    css`
      border: 3px solid #f65757;
    `}
`
