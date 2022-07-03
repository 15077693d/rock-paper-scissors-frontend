import styled, { css } from 'styled-components'
import BaseButton from '../../componets/buttons/BaseButton/BaseButton'

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
const BaseRulesButton = styled(BaseButton)`
  position: absolute;
  bottom: 30px;
  right: 30px;
`
export const RulesButton = () => {
  return (
    <BaseRulesButton
      varient={'outlined'}
      width={'128px'}
      height={'40px'}
    >
      rules
    </BaseRulesButton>
  )
}
