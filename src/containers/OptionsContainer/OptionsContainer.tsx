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
  handleClickReveal,
  handleClickPlayAgain,
}: {
  isResult: boolean
  handleClickReveal?: () => void
  handleClickPlayAgain?: () => void
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
            <PlayAgainButton
              onClick={handleClickPlayAgain}
            />
          </ResultWrapper>
        )}
        <OptionWrapper>
          <Title>OPPONENT PICKED</Title>
          <EmptyOption />
        </OptionWrapper>
      </OptionsWrapper>
      {!isResult && (
        <RevealButton
          onClick={handleClickReveal}
        />
      )}
      {isResult && isMoblie && (
        <ResultWrapper>
          <Result>YOU WIN</Result>
          <PlayAgainButton
            onClick={handleClickPlayAgain}
          />
        </ResultWrapper>
      )}
    </Container>
  )
}
