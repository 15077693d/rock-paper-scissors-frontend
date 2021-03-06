import { useNavigate } from 'react-router-dom'
import { pageVariants } from '../../assets/animationVariants'
import {
  RouteId,
  routes,
} from '../../config/routes'
import ResultContainer from '../../containers/ResultContainer/ResultContainer'
import { Container } from './ResultPage.elements'

export default function ResultPage() {
  const navigate = useNavigate()
  const handleClickPlayAgain = () =>
    navigate(routes[RouteId.OPTIONSELECT].path)
  return (
    <Container
      variants={pageVariants}
      exit={'exit'}
    >
      <ResultContainer
        handleClickPlayAgain={
          handleClickPlayAgain
        }
      />
    </Container>
  )
}
