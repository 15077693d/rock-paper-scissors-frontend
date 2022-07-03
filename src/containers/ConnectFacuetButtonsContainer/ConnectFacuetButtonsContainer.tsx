import BaseButton from '../../componets/buttons/BaseButton/BaseButton'
import { Container } from './ConnectFacuetButtonsContainer.elements'

export default function ConnectFacuetButtonsContainer({
  ...args
}) {
  return (
    <Container {...args}>
      <BaseButton
        varient={'contained'}
        width={'150px'}
        height={'40px'}
      >
        connect
      </BaseButton>
      <BaseButton
        varient={'contained'}
        width={'150px'}
        height={'40px'}
      >
        faucet
      </BaseButton>
    </Container>
  )
}
