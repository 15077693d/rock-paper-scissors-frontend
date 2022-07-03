import ConnectFacuetButtonsContainer from '../../containers/ConnectFacuetButtonsContainer/ConnectFacuetButtonsContainer'
import LogoFeeCardContainer from '../../containers/LogoFeeCardContainer/LogoFeeCardContainer'
import OptionsContainer from '../../containers/OptionsContainer/OptionsContainer'
import { Container } from './ResultPage.elements'

export default function OptionWaitingPage() {
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
      {/* <SelectOptionsContainer /> */}
      <OptionsContainer isResult={true} />
      <LogoFeeCardContainer />
      <ConnectFacuetButtonsContainer />
      {/* <OptionsContainer isResult={false} /> */}
    </Container>
  )
}
