export const increment2 = () =>
  ({
    type: 'counter/increment2',
  }) as const

export const decrement2 = () =>
  ({
    type: 'counter/decrement2',
  }) as const

export const resetData2 = () =>
  ({
    type: 'counter/reset2',
  }) as const

export const toggleDataSet2 = (dataIsSet2: boolean) =>
  ({
    type: 'counter/toggleDataSet2',
    dataIsSet2,
  }) as const

export const changeMin2 = (min2: number) =>
  ({
    type: 'counter/changeMin2',
    min2,
  }) as const

export const changeMax2 = (max2: number) =>
  ({
    type: 'counter/changeMax2',
    max2,
  }) as const
