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
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 200px;
      height: 150px;
      @media ${mobile} {
        width: 80vw;
        padding: 15px;
        height: 70px;
        flex-direction: row;
      }
    `
  }}
`
