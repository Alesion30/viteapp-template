import { useState } from 'react'

export const useHoge = () => {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count - 1)
  }

  return {
    count,
    addCount,
  }
}
