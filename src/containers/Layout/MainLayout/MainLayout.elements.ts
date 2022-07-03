import styled, { css } from 'styled-components'
import ConnectFacuetButtonsContainer from '../../ConnectFacuetButtonsContainer/ConnectFacuetButtonsContainer'

export const Container = styled.div`
  ${() => {
    return css`
      flex-direction: column;
      display: flex;
      align-items: center;
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
      margin-top: 40px;
      display: flex;
      @media ${mobile} {
        flex-direction: column;
      }
    `
  }}
`

export const StyledConnectFacuetButtonsContainer = styled(
  ConnectFacuetButtonsContainer,
)`
  ${({
    theme: {
      device: { mobile },
    },
  }) => {
    return css`
      margin-left: 15px;
      @media ${mobile} {
        margin-left: 0px;
        margin-top: 15px;
      }
    `
  }}
`

export const ChildrenContainer = styled.div`
  width: 100vw;
`
