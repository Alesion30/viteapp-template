import { useState } from 'react'

export const useRoot = () => {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  return {
    count,
    addCount,
  }
}
