import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { OptionId } from '../../../config/option'

export type OptionButtonProps = {
  optionId: OptionId
  disable?: boolean
  isWinner?: boolean
}
export const Image = styled.img<OptionButtonProps>`
  ${({
    theme: {
      img: { option },
    },
    optionId,
  }) => {
    const transform = `rotate(${option[optionId].rotate})`
    return css`
      transform: ${transform};
      width: ${option[optionId].width};
      height: ${option[optionId].height};
    `
  }}
`
export const Wrapper = styled(motion.div)`
  ${() => {
    return css`
      position: relative;
      cursor: pointer;
      width: 215px;
      height: 198px;
    `
  }}
`
export const InnerContainer = styled.div<{
  active?: boolean
}>`
  ${({
    theme: { color, borderRadius },
    active,
  }) => {
    const transform = active ? '8%' : '4%'
    return css`
      transform: translateY(${transform});
      display: flex;
      justify-content: center;
      align-items: center;
      width: 79%;
      height: 78%;
      border-radius: ${borderRadius.circle};
      background: ${color.button.option.inner
        .primary};
      box-shadow: ${`0px -10px 0px 0px ${color.button.option.inner.shadow}`};
    `
  }}
`
export const OuterContainer = styled.div<OptionButtonProps>`
  ${({
    theme: { borderRadius, color },
    optionId,
  }) => {
    const { button } = color
    const backgroundColor =
      button.option.outer[optionId].primary
    const boxShadowColor =
      button.option.outer[optionId].shadow
    return css`
      position: absolute;
      z-index: 2;
      display: flex;
      background-color: ${backgroundColor};
      box-shadow: ${`0px 10px 0px 0px ${boxShadowColor}`};
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: ${borderRadius.circle};
    `
  }}
`
export const Shadow = styled.div<{
  shadowId: '1' | '2' | '3'
}>`
  ${({ theme, shadowId }) => {
    const length =
      (shadowId == '1' && '140%') ||
      (shadowId == '2' && '185%') ||
      (shadowId == '3' && '240%')
    return css`
      position: absolute;
      z-index: 0;
      background-color: ${theme.color.button
        .option.hover};
      border-radius: ${theme.borderRadius.circle};
      width: ${length};
      height: ${length};
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `
  }}
`
