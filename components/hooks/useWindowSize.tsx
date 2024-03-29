import { useCallback, useEffect, useState } from 'react'
export function useWindowSize() {
  const isClient = typeof window === 'object'
  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : 300,
      height: isClient ? window.innerHeight : 400,
    }
  }, [isClient])

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getSize, isClient])

  return windowSize
}
