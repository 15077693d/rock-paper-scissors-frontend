import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({
    theme: {
      color: {
        background: { enable },
      },
    },
  }) => {
    return css`
      background: ${enable};
      width: 100vw;
      height: 100vh;
    `
  }}
`
export {}
