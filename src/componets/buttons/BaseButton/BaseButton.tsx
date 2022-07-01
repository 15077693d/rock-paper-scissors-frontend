import { ReactNode } from 'react'
import {
  Button,
  ButtonProps,
} from './BaseButton.elements'

export default function BaseButton({
  children,
  varient = 'contained',
  width,
  height,
  ...args
}: {
  children: ReactNode
} & ButtonProps) {
  return (
    <Button
      {...args}
      varient={varient}
      width={width}
      height={height}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      {children}
    </Button>
  )
}
