import SelectOptionsContainer from '../../containers/SelectOptionsContainer/SelectOptionsContainer'
import { Container } from './Main.elements'

export default function Main() {
  return (
    <Container>
      {/* <RuleCard /> */}
      {/* <FeeCard />
      <OptionButton
        optionId={OptionId.ROCK}
        disable
        isWinner
      />
      <OptionButton optionId={OptionId.PAPER} /> */}
      {/* <BaseButton
        varient={'contained'}
        width={'220px'}
        height={'48px'}
      >
        play again
      </BaseButton>
      <RulesButton /> */}
      <SelectOptionsContainer />
    </Container>
  )
}
