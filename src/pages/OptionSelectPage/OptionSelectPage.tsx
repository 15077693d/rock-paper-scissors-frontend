import { pageVariants } from '../../assets/animationVariants'
import SelectOptionsContainer from '../../containers/SelectOptionsContainer/SelectOptionsContainer'
import { Container } from './OptionSelectPage.elements'

export default function OptionSelectPage() {
  return (
    <Container
      variants={pageVariants}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
    >
      <SelectOptionsContainer />
    </Container>
  )
}
