import { bgTriangleSrc } from '../../assets/Images'
import { OptionId } from '../../config/option'
import {
  Background,
  Container,
  PaperOptionButton,
  RockOptionButton,
  ScissorsOptionButton,
} from './SelectOptionContainer.elements'

export default function SelectOptionsContainer() {
  return (
    <Container>
      <PaperOptionButton
        optionId={OptionId.PAPER}
      />
      <ScissorsOptionButton
        optionId={OptionId.SCISSORS}
      />
      <RockOptionButton
        optionId={OptionId.ROCK}
      />
      <Background src={bgTriangleSrc} />
    </Container>
  )
}
