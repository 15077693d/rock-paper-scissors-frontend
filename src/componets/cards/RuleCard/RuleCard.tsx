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

export default function RuleCard({
  handleClickCross,
}: {
  handleClickCross: () => void
}) {
  const isMoblie = useIsMoblie()
  const crossBtn = (
    <Cross
      onClick={handleClickCross}
      src={crossSrc}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    />
  )

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
    >
      <Background onClick={handleClickCross} />
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
