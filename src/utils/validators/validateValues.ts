export const validateValues = (minValue: number, maxValue: number) => {
  const valuesNotValid =
    minValue < 0 || minValue >= maxValue || maxValue < 0 || maxValue <= minValue

  if (valueIsMaxSafe(minValue) || valueIsMaxSafe(maxValue)) {
    return false
  } else return !valuesNotValid
}

const valueIsMaxSafe = (value: number) => value >= Number.MAX_SAFE_INTEGER
