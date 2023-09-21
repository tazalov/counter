export const Increment = () =>
  ({
    type: 'counter/increment',
  }) as const

export const Decrement = () =>
  ({
    type: 'counter/decrement',
  }) as const

export const ResetData = () =>
  ({
    type: 'counter/reset',
  }) as const

export const ChangeDataSet = (isDataSet: boolean) =>
  ({
    type: 'counter/changeDataSet',
    isDataSet,
  }) as const

export const ChangeMin = (min: number) =>
  ({
    type: 'counter/changeMin',
    min,
  }) as const

export const ChangeMax = (max: number) =>
  ({
    type: 'counter/changeMax',
    max,
  }) as const

export const SetError = (error: string) =>
  ({
    type: 'counter/setError',
    error,
  }) as const
