import {
  crossSrc,
  ruleSrc,
} from '../../../assets/Images'
import useIsMoblie from '../../../hooks/useIsMoblie'
import {
  Background,
  Container,
  Cross,
  Header,
  Image,
  Wrapper,
} from './RuleCard.elements'

export default function RuleCard() {
  const isMoblie = useIsMoblie()

  const crossBtn = (
    <Cross
      src={crossSrc}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    />
  )
  return (
    <Wrapper>
      <Background />
      <Container>
        <Header>
          <span>RULES</span>
          {!isMoblie && crossBtn}
        </Header>
        <Image src={ruleSrc} />
        {isMoblie && crossBtn}
      </Container>
    </Wrapper>
  )
}
