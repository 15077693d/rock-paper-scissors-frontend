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
      box-sizing: border-box;
      border-radius: ${borderRadius.large};
      border: 3px solid ${color.darkGrey};
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 588px;
      height: 150px;
      @media ${mobile} {
        width: 80vw;
        padding: 15px;
        height: 130px;
      }
    `
  }}
`

export const Logo = styled.img`
  ${({
    theme: {
      device: { mobile },
    },
  }) => {
    return css`
      width: 155px;
      @media ${mobile} {
        width: 95px;
      }
    `
  }}
`
