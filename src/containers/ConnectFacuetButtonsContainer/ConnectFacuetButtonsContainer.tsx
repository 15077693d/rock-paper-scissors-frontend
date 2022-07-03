import BaseButton from '../../componets/buttons/BaseButton/BaseButton'
import useIsMoblie from '../../hooks/useIsMoblie'
import { Container } from './ConnectFacuetButtonsContainer.elements'

export default function ConnectFacuetButtonsContainer({
  ...args
}) {
  const isMoblie = useIsMoblie()
  return (
    <Container {...args}>
      <BaseButton
        varient={'contained'}
        width={isMoblie ? '40%' : '150px'}
        height={isMoblie ? '40px' : '40px'}
      >
        connect
      </BaseButton>
      <BaseButton
        varient={'contained'}
        width={isMoblie ? '40%' : '150px'}
        height={isMoblie ? '40px' : '40px'}
      >
        faucet
      </BaseButton>
    </Container>
  )
}
