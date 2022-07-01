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
export const Wrapper = styled(motion.div)<{
  $disable: boolean
}>`
  ${({
    $disable,
    theme: {
      device: { mobile },
    },
  }) => {
    return css`
      position: relative;
      cursor: ${$disable ? 'normal' : 'pointer'};
      width: ${$disable ? '300px' : '215px'};
      height: ${$disable ? '290px' : '198px'};
      @media${mobile} {
        width: 130px;
        height: 125px;
      }
    `
  }}
`
export const InnerContainer = styled.div`
  ${({
    theme: {
      color,
      borderRadius,
      device: { mobile },
    },
  }) => {
    return css`
      transform: translateY(4%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 79%;
      height: 78%;
      border-radius: ${borderRadius.circle};
      background: ${color.button.option.inner
        .primary};
      box-shadow: ${`0px -10px 0px 0px ${color.button.option.inner.shadow}`};
      @media${mobile} {
        box-shadow: ${`0px -6px 0px 0px ${color.button.option.inner.shadow}`};
      }
    `
  }}
`
export const OuterContainer = styled.div<OptionButtonProps>`
  ${({
    theme: {
      borderRadius,
      color,
      device: { mobile },
    },
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
      @media${mobile} {
        box-shadow: ${`0px 6px 0px 0px ${boxShadowColor}`};
      }
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
