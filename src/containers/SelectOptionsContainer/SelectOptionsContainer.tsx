import { useNavigate } from 'react-router-dom'
import { bgTriangleSrc } from '../../assets/Images'
import { OptionId } from '../../config/option'
import {
  RouteId,
  routes,
} from '../../config/routes'
import { useGameDataContext } from '../../contexts/useGameDataContext'
import {
  Background,
  Container,
  PaperOptionButton,
  RockOptionButton,
  ScissorsOptionButton,
} from './SelectOptionContainer.elements'

export default function SelectOptionsContainer() {
  const navigate = useNavigate()
  const { setMyOptionId } = useGameDataContext()
  const handleClickOption = (
    optionId: OptionId,
  ) => {
    navigate(routes[RouteId.OPTIONWAITING].path)
    setMyOptionId(optionId)
  }
  return (
    <Container>
      <PaperOptionButton
        onClick={() =>
          handleClickOption(OptionId.PAPER)
        }
        optionId={OptionId.PAPER}
      />
      <ScissorsOptionButton
        onClick={() =>
          handleClickOption(OptionId.SCISSORS)
        }
        optionId={OptionId.SCISSORS}
      />
      <RockOptionButton
        onClick={() =>
          handleClickOption(OptionId.ROCK)
        }
        optionId={OptionId.ROCK}
      />
      <Background src={bgTriangleSrc} />
    </Container>
  )
}
