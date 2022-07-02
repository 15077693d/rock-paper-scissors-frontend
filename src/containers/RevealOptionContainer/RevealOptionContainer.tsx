import OptionButton from '../../componets/buttons/OptionButton/OptionButton'
import { OptionId } from '../../config/option'
import {
  Container,
  EmptyOption,
  OptionsWrapper,
  OptionWrapper,
  RevealButton,
  Title,
} from './RevealOptionContainer.elements'

export default function RevealOptionContainer() {
  return (
    <Container>
      <OptionsWrapper>
        <OptionWrapper>
          <Title>YOU PICKED</Title>
          <OptionButton
            disabled
            optionId={OptionId.PAPER}
          />
        </OptionWrapper>
        <OptionWrapper>
          <Title>OPPONENT PICKED</Title>
          <EmptyOption />
        </OptionWrapper>
      </OptionsWrapper>
      <RevealButton />
    </Container>
  )
}
