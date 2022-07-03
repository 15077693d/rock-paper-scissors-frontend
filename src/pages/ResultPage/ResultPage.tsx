import OptionsContainer from '../../containers/OptionsContainer/OptionsContainer'
import { Container } from './ResultPage.elements'

export default function ResultPage() {
  return (
    <Container>
      <OptionsContainer isResult={false} />
    </Container>
  )
}
