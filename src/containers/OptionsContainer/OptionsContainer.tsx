import OptionButton from '../../componets/buttons/OptionButton/OptionButton'
import { useGameDataContext } from '../../contexts/useGameDataContext'
import {
  Container,
  EmptyOption,
  OptionsWrapper,
  OptionWrapper,
  RevealButton,
  Title,
} from './OptionsContainer.elements'

export default function OptionsContainer({
  handleClickReveal,
}: {
  handleClickReveal?: () => void
  handleClickPlayAgain?: () => void
}) {
  const { myOptionId } = useGameDataContext()
  if (!myOptionId) return <></>
  return (
    <Container>
      <OptionsWrapper>
        <OptionWrapper>
          <Title>YOU PICKED</Title>
          <OptionButton
            disabled
            optionId={myOptionId}
          />
        </OptionWrapper>
        <OptionWrapper>
          <Title>OPPONENT PICKED</Title>
          <EmptyOption />
        </OptionWrapper>
      </OptionsWrapper>
      <RevealButton onClick={handleClickReveal} />
    </Container>
  )
}
