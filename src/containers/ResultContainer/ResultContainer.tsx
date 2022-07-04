import OptionButton from '../../componets/buttons/OptionButton/OptionButton'
import { useGameDataContext } from '../../contexts/useGameDataContext'
import useIsMoblie from '../../hooks/useIsMoblie'
import {
  Container,
  OptionsWrapper,
  OptionWrapper,
  PlayAgainButton,
  Result,
  ResultWrapper,
  Title,
} from './ResultContainer.elements'

export default function ResultContainer({
  handleClickPlayAgain,
}: {
  handleClickPlayAgain?: () => void
}) {
  const isMoblie = useIsMoblie()
  const { myOptionId, opponentOptionId } =
    useGameDataContext()
  if (
    !myOptionId ||
    !opponentOptionId ||
    isMoblie === undefined
  )
    return <></>
  return (
    <Container>
      {isMoblie && (
        <OptionsWrapper isResult={true}>
          <OptionWrapper>
            <Title>YOU PICKED</Title>
            <OptionButton
              isWinner
              disabled
              optionId={myOptionId}
            />
          </OptionWrapper>
          <OptionWrapper>
            <Title>OPPONENT PICKED</Title>
            <OptionButton
              disabled
              optionId={opponentOptionId}
            />
          </OptionWrapper>
        </OptionsWrapper>
      )}
      {!isMoblie && (
        <OptionsWrapper isResult={true}>
          <OptionWrapper
            initial={{ x: 120 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>YOU PICKED</Title>
            <OptionButton
              isWinner
              disabled
              optionId={myOptionId}
            />
          </OptionWrapper>
          <ResultWrapper
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Result>YOU WIN</Result>
            <PlayAgainButton
              onClick={handleClickPlayAgain}
            />
          </ResultWrapper>
          <OptionWrapper
            initial={{ x: -120 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>OPPONENT PICKED</Title>
            <OptionButton
              disabled
              optionId={opponentOptionId}
            />
          </OptionWrapper>
        </OptionsWrapper>
      )}
      {isMoblie && (
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
