import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({
    theme: {
      borderRadius,
      color,
      device: { mobile },
    },
  }) => {
    return css`
      background-color: ${color.white};
      width: 150px;
      height: 114px;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${borderRadius.medium};
      @media ${mobile} {
        width: 82px;
        height: 69px;
      }
    `
  }}
`
export const Title = styled.div`
  ${({
    theme: {
      font,
      color,
      device: { mobile },
    },
  }) => {
    return css`
      color: ${color.purpleBlue};
      font: ${font.button};
      letter-spacing: 2.5px;
      text-transform: uppercase;
      @media ${mobile} {
        font-size: 10px;
        letter-spacing: 1.5px;
      }
    `
  }}
`

export const Number = styled.span`
  ${({
    theme: {
      color,
      device: { mobile },
    },
  }) => {
    return css`
      color: ${color.darkGrey};
      font-weight: bold;
      font-size: 64px;
      @media ${mobile} {
        font-size: 40px;
      }
    `
  }}
`

export const Units = styled.span`
  ${({
    theme: {
      color,
      device: { mobile },
    },
  }) => {
    return css`
      color: ${color.darkGrey};
      font-weight: bold;
      font-size: 30px;
      @media ${mobile} {
        font-size: 15px;
      }
    `
  }}
`
