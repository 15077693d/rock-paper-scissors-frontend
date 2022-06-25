import styled, { css } from 'styled-components'
import { OptionId } from '../../../config/option'

export type OptionButtonProps = {
  optionId: OptionId
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
export const Container = styled.div`
  ${({ theme: { color, borderRadius } }) => {
    return css`
      transform: translateY(7px);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 79%;
      height: 78%;
      border-radius: ${borderRadius.circle};
      background: ${color.button.option.inner.primary};
      box-shadow: ${`0px -10px 0px 0px ${color.button.option.inner.shadow}`};
    `
  }}
`
export const Wrapper = styled.div<OptionButtonProps>`
  ${({ theme: { borderRadius, color }, optionId }) => {
    const { button } = color
    const backgroundColor = button.option.outer[optionId].primary
    const boxShadowColor = button.option.outer[optionId].shadow
    return css`
      position: relative;
      cursor: pointer;
      display: flex;
      background-color: ${backgroundColor};
      box-shadow: ${`0px 10px 0px 0px ${boxShadowColor}`};
      justify-content: center;
      align-items: center;
      width: 215px;
      height: 198px;
      border-radius: ${borderRadius.circle};
    `
  }}
`
export const Shadow1 = styled.div``
