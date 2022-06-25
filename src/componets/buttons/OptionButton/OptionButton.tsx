import { optionSrc } from '../../../assets/Images'
import { Container, Image, OptionButtonProps, Wrapper } from './OptionButton.elements'

export default function OptionButton({ optionId }: OptionButtonProps) {
  return (
    <Wrapper optionId={optionId}>
      <Container>
        <Image optionId={optionId} src={optionSrc[optionId]} />
      </Container>
    </Wrapper>
  )
}
