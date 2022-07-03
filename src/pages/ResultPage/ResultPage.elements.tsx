import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Container = styled(motion.div)`
  ${() => {
    return css`
      display: flex;
      justify-content: center;
      margin-top: 120px;
    `
  }}
`
