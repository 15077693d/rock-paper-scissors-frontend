import OptionsContainer from '../../containers/OptionsContainer/OptionsContainer'
import { Container } from './OptionWaitingPage.elements'

export default function OptionWaitingPage() {
  return (
    <Container>
      <OptionsContainer isResult={false} />
    </Container>
  )
}
