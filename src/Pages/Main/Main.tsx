import OptionButton from '../../componets/buttons/OptionButton/OptionButton'
import { OptionId } from '../../config/option'
import { Container } from './Main.elements'

export default function Main() {
  return (
    <Container>
      {/* <OptionButton
        optionId={OptionId.SCISSORS}
        disable
        isWinner
      /> */}
      <OptionButton
        optionId={OptionId.ROCK}
        disable
      />
      <OptionButton optionId={OptionId.PAPER} />
    </Container>
  )
}
