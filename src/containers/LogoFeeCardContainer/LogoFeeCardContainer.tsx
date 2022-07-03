import { logoSrc } from '../../assets/Images'
import FeeCard from '../../componets/cards/FeeCard/FeeCard'
import {
  Container,
  Logo,
} from './LogoFeeCardContainer.elements'

export default function LogoFeeCardContainer() {
  return (
    <Container>
      <Logo src={logoSrc} />
      <FeeCard />
    </Container>
  )
}
