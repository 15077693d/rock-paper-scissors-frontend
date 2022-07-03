import { RulesButton } from '../../../pages/OptionSelectPage/OptionSelectPage.elements'
import LogoFeeCardContainer from '../../LogoFeeCardContainer/LogoFeeCardContainer'
import {
  ChildrenContainer,
  Container,
  Header,
  StyledConnectFacuetButtonsContainer,
} from './MainLayout.elements'

export default function MainLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <Container>
      <Header>
        <LogoFeeCardContainer />
        <StyledConnectFacuetButtonsContainer />
      </Header>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
      <RulesButton />
    </Container>
  )
}
