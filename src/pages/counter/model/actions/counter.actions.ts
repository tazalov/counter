export const increment = () =>
  ({
    type: 'counter/increment',
  }) as const

export const decrement = () =>
  ({
    type: 'counter/decrement',
  }) as const

export const resetData = () =>
  ({
    type: 'counter/reset',
  }) as const

export const toggleDataSet = () =>
  ({
    type: 'counter/toggleDataSet',
  }) as const

export const changeMin = (min: number) =>
  ({
    type: 'counter/changeMin',
    min,
  }) as const

export const changeMax = (max: number) =>
  ({
    type: 'counter/changeMax',
    max,
  }) as const
