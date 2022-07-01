import RuleCard from '../../componets/cards/RuleCard/RuleCard'
import { Container } from './Main.elements'

export default function Main() {
  return (
    <Container>
      <RuleCard />
      {/* <FeeCard />
      <OptionButton
        optionId={OptionId.ROCK}
        disable
        isWinner
      />
      <OptionButton optionId={OptionId.PAPER} />
      <BaseButton
        varient={'contained'}
        width={'220px'}
        height={'48px'}
      >
        play again
      </BaseButton>
      <BaseButton
        varient={'outlined'}
        width={'128px'}
        height={'40px'}
      >
        rules
      </BaseButton> */}
    </Container>
  )
}
