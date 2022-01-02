import { useState } from 'react'

export const useHoge = () => {
  const [count, setCount] = useState(0)

  const subCount = () => {
    setCount(count - 1)
  }

  return {
    count,
    subCount,
  }
}
