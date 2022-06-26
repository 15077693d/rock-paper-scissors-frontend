import BaseButton from '../../componets/buttons/BaseButton/BaseButton'
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
        disable={true}
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
      </BaseButton>
    </Container>
  )
}
