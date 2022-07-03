import { useNavigate } from 'react-router-dom'
import { pageVariants } from '../../assets/animationVariants'
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
    <Container
      variants={pageVariants}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
    >
      <OptionsContainer
        isResult={false}
        handleClickReveal={handleClickReveal}
      />
    </Container>
  )
}
