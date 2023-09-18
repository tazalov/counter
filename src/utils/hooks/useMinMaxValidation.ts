import { useEffect, useState } from 'react'

export const useMinMaxValidation = () => {
  const [error, setError] = useState('')

  const validateChange = (minValue: number, maxValue: number) => {
    const anyValueIsMaxSafe =
      minValue >= Number.MAX_SAFE_INTEGER || maxValue >= Number.MAX_SAFE_INTEGER
    const valuesAreNotValid =
      minValue < 0 || minValue >= maxValue || maxValue < 0 || maxValue <= minValue

    if (valuesAreNotValid && !anyValueIsMaxSafe) {
      setError('Incorrect value(s)')
      return false
    } else {
      setError('')
      return true
    }
  }

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError('')
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [error, setError])

  return { error, validateChange }
}
