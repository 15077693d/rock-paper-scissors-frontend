import {
  crossSrc,
  ruleSrc,
} from '../../../assets/Images'
import {
  Background,
  Container,
  Cross,
  Header,
  Image,
  Wrapper,
} from './RuleCard.elements'

export default function RuleCard() {
  return (
    <Wrapper>
      <Background />
      <Container>
        <Header>
          <span>RULES</span>
          <Cross
            src={crossSrc}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </Header>
        <Image src={ruleSrc} />
      </Container>
    </Wrapper>
  )
}
