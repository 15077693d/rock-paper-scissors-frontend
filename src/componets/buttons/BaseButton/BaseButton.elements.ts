import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export type ButtonProps = {
  varient: 'contained' | 'outlined'
  width: string
  height: string
  onClick?: () => void
}
export const Button = styled(
  motion.button,
)<ButtonProps>`
  ${({
    theme: {
      font,
      borderRadius,
      color: { white, darkBlue, red },
    },
    varient,
    width,
    height,
  }) => {
    const initBackground =
      varient === 'outlined' ? 'none' : 'normal'
    const initColor =
      varient === 'outlined' ? white : darkBlue
    const hoveredColor =
      varient === 'outlined' ? darkBlue : red
    return css`
      transition: color, background-color 0.4s;
      background: ${initBackground};
      cursor: pointer;
      border: 1.5px solid ${white};
      outline: none;
      letter-spacing: 2.5px;
      border-radius: ${borderRadius.medium};
      color: ${initColor};
      text-transform: uppercase;
      font: ${font.button};
      width: ${width};
      height: ${height};
      :hover {
        color: ${hoveredColor};
        background-color: ${white};
      }
    `
  }}
`
