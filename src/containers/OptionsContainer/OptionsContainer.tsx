import OptionButton from '../../componets/buttons/OptionButton/OptionButton'
import { OptionId } from '../../config/option'
import useIsMoblie from '../../hooks/useIsMoblie'
import {
  Container,
  EmptyOption,
  OptionsWrapper,
  OptionWrapper,
  PlayAgainButton,
  Result,
  ResultWrapper,
  RevealButton,
  Title,
} from './OptionsContainer.elements'

export default function OptionsContainer({
  isResult,
}: {
  isResult: boolean
}) {
  const isMoblie = useIsMoblie()
  return (
    <Container>
      <OptionsWrapper isResult={isResult}>
        <OptionWrapper>
          <Title>YOU PICKED</Title>
          <OptionButton
            disabled
            optionId={OptionId.PAPER}
          />
        </OptionWrapper>
        {!isMoblie && isResult && (
          <ResultWrapper>
            <Result>YOU WIN</Result>
            <PlayAgainButton />
          </ResultWrapper>
        )}
        <OptionWrapper>
          <Title>OPPONENT PICKED</Title>
          <EmptyOption />
        </OptionWrapper>
      </OptionsWrapper>
      {!isResult && <RevealButton />}
      {isResult && isMoblie && (
        <ResultWrapper>
          <Result>YOU WIN</Result>
          <PlayAgainButton />
        </ResultWrapper>
      )}
    </Container>
  )
}
