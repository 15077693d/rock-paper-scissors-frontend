import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Background = styled.div`
  ${({
    theme: {
      color: { background },
    },
  }) => {
    return css`
      position: absolute;
      background-color: ${background.disable};
      width: 100vw;
      height: 100vh;
      top: 0px;
      left: 0px;
    `
  }}
`

export const Container = styled.div`
  ${({
    theme: {
      color,
      borderRadius,
      device: { mobile },
    },
  }) => {
    return css`
      position: relative;
      background-color: ${color.white};
      width: 400px;
      height: 415px;
      border-radius: ${borderRadius.medium};
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      @media ${mobile} {
        width: 100vw;
        height: 100vh;
      }
    `
  }}
`

export const Header = styled.div`
  ${({
    theme: {
      device: { mobile },
    },
  }) => {
    return css`
      font-size: 32px;
      font-weight: bold;
      display: flex;
      width: 90%;
      justify-content: space-between;
      @media ${mobile} {
        justify-content: center;
      }
    `
  }}
`

export const Cross = styled(motion.img)`
  ${() => {
    return css`
      cursor: pointer;
      width: 19px;
      height: 19px;
    `
  }}
`

export const Image = styled.img`
  ${() => {
    return css`
      width: 305px;
      height: 271px;
    `
  }}
`

export const Wrapper = styled.div`
  ${() => {
    return css`
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `
  }}
`
