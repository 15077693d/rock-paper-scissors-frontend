import { useNavigate } from 'react-router-dom'
import { bgTriangleSrc } from '../../assets/Images'
import { OptionId } from '../../config/option'
import {
  RouteId,
  routes,
} from '../../config/routes'
import {
  Background,
  Container,
  PaperOptionButton,
  RockOptionButton,
  ScissorsOptionButton,
} from './SelectOptionContainer.elements'

export default function SelectOptionsContainer() {
  const navigate = useNavigate()
  return (
    <Container>
      <PaperOptionButton
        onClick={() =>
          navigate(
            routes[RouteId.OPTIONWAITING].path,
          )
        }
        optionId={OptionId.PAPER}
      />
      <ScissorsOptionButton
        optionId={OptionId.SCISSORS}
      />
      <RockOptionButton
        optionId={OptionId.ROCK}
      />
      <Background src={bgTriangleSrc} />
    </Container>
  )
}
