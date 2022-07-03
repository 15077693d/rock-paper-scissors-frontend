import styled, { css } from 'styled-components'
import BaseButton from '../../componets/buttons/BaseButton/BaseButton'

export const EmptyOption = styled.div`
  ${({
    theme: {
      borderRadius,
      device: { mobile },
    },
  }) => {
    return css`
      box-sizing: border-box;
      border-radius: ${borderRadius.circle};
      padding: 21%;
      background-color: rgba(0, 0, 0, 0.1);
      position: relative;
      width: 300px;
      height: 290px;
      @media${mobile} {
        width: 130px;
        height: 125px;
      }
    `
  }}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    z-index: 1;
  }
`
export const OptionsWrapper = styled.div<{
  isResult: boolean
}>`
  ${({
    isResult,
    theme: {
      device: { mobile },
    },
  }) => {
    return css`
      width: ${isResult ? '938px' : '700px'};
      display: flex;
      justify-content: space-between;
      @media ${mobile} {
        width: 324px;
      }
    `
  }}
`

export const OptionWrapper = styled.div`
  ${({
    theme: {
      device: { mobile },
    },
  }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      @media ${mobile} {
        flex-direction: column-reverse;
      }
    `
  }}
`
export const Result = styled.span`
  ${({ theme: { color } }) => {
    return css`
      text-align: center;
      font-weight: bold;
      font-size: 56px;
      color: ${color.white};
      margin-bottom: 20px;
    `
  }}
`

export const ResultWrapper = styled.div`
  ${({
    theme: {
      device: { mobile },
    },
  }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media ${mobile} {
        margin-top: 40px;
      }
    `
  }}
`

export const Title = styled.span`
  ${({
    theme: {
      color,
      device: { mobile },
    },
  }) => {
    return css`
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 3px;
      color: ${color.white};
      margin-bottom: 60px;
      @media ${mobile} {
        font-size: 15px;
        letter-spacing: 1.88px;
        margin-top: 30px;
        margin-bottom: 0;
      }
    `
  }}
`

export const BaseRevealButton = styled(
  BaseButton,
)`
  ${() => {
    return css`
      margin-top: 60px;
    `
  }}
`

export const RevealButton = ({
  onClick,
}: {
  onClick?: () => void
}) => {
  return (
    <BaseRevealButton
      onClick={onClick}
      varient={'contained'}
      width={'220px'}
      height={'48px'}
    >
      Reveal
    </BaseRevealButton>
  )
}

export const BasePlayAgainButton = styled(
  BaseButton,
)`
  ${() => {
    return css`
      margin: 20px;
    `
  }}
`

export const PlayAgainButton = ({
  onClick,
}: {
  onClick?: () => void
}) => {
  return (
    <BasePlayAgainButton
      onClick={onClick}
      varient={'contained'}
      width={'220px'}
      height={'48px'}
    >
      PLAY AGAIN
    </BasePlayAgainButton>
  )
}
