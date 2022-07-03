import { useNavigate } from 'react-router-dom'
import {
  RouteId,
  routes,
} from '../../config/routes'
import OptionsContainer from '../../containers/OptionsContainer/OptionsContainer'
import { Container } from './OptionWaitingPage.elements'

export default function OptionWaitingPage() {
  const navigate = useNavigate()
  const handleClickReveal = () =>
    navigate(routes[RouteId.RESULT].path)
  return (
    <Container>
      <OptionsContainer
        isResult={false}
        handleClickReveal={handleClickReveal}
      />
    </Container>
  )
}
