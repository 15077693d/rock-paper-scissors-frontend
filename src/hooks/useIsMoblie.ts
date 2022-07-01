import { useEffect, useState } from 'react'
import { mobileValue } from '../assets/styles'

type useIsMoblieReturnType = boolean
export default function useIsMoblie(): useIsMoblieReturnType {
  const [isMoblie, setIsMoblie] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobileValue) {
        setIsMoblie(false)
      } else {
        setIsMoblie(true)
      }
    }
    window.addEventListener(
      'resize',
      handleResize,
    )
    return () =>
      window.removeEventListener(
        'resize',
        handleResize,
      )
  }, [])
  return isMoblie
}
