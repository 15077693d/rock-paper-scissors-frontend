import styled, { css } from 'styled-components'
import OptionButton from '../../componets/buttons/OptionButton/OptionButton'

export const Container = styled.div`
  ${({
    theme: {
      device: { mobile },
    },
  }) => {
    return css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 476px;
      height: 430px;
      @media ${mobile} {
        width: 312px;
        height: 282px;
      }
    `
  }}
`
export const PaperOptionButton = styled(
  OptionButton,
)`
  position: absolute;
  top: 0;
  left: 0;
`
export const ScissorsOptionButton = styled(
  OptionButton,
)`
  position: absolute;
  top: 0;
  right: 0;
`
export const RockOptionButton = styled(
  OptionButton,
)`
  position: absolute;
  bottom: 0;
`

export const Background = styled.img`
  ${({
    theme: {
      device: { mobile },
    },
  }) => {
    return css`
      width: 254px;
      height: 287px;
      @media ${mobile} {
        width: 166px;
        height: 188px;
      }
    `
  }}
`
