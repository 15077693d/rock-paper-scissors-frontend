import OptionButton from '../../componets/buttons/OptionButton/OptionButton'
import { OptionId } from '../../config/option'
import { Container } from './Main.elements'

export default function Main() {
  return (
    <Container>
      <OptionButton optionId={OptionId.PAPER} />
      <OptionButton optionId={OptionId.SCISSORS} />
      <OptionButton optionId={OptionId.ROCK} />
    </Container>
  )
}
