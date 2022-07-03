import { useNavigate } from 'react-router-dom'
import {
  RouteId,
  routes,
} from '../../config/routes'
import OptionsContainer from '../../containers/OptionsContainer/OptionsContainer'
import { Container } from './ResultPage.elements'

export default function ResultPage() {
  const navigate = useNavigate()
  const handleClickPlayAgain = () =>
    navigate(routes[RouteId.OPTIONSELECT].path)
  return (
    <Container>
      <OptionsContainer
        isResult={true}
        handleClickPlayAgain={
          handleClickPlayAgain
        }
      />
    </Container>
  )
}
