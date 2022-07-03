import { AnimatePresence } from 'framer-motion'
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import MainLayout from '../../containers/Layout/MainLayout/MainLayout'
import OptionSelectPage from '../../pages/OptionSelectPage/OptionSelectPage'
import OptionWaitingPage from '../../pages/OptionWaitingPage/OptionWaitingPage'
import ResultPage from '../../pages/ResultPage/ResultPage'
export enum RouteId {
  OPTIONSELECT = 'OPTIONSELECT',
  OPTIONWAITING = 'OPTIONWAITING',
  RESULT = 'RESULT',
}
export const routes: {
  [id in RouteId]: {
    path: string
    Component: JSX.Element
  }
} = {
  [RouteId.OPTIONSELECT]: {
    path: '/',
    Component: <OptionSelectPage />,
  },
  [RouteId.OPTIONWAITING]: {
    path: '/waiting',
    Component: <OptionWaitingPage />,
  },
  [RouteId.RESULT]: {
    path: '/result',
    Component: <ResultPage />,
  },
}

export default function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <MainLayout>
        <AnimatePresence exitBeforeEnter>
          <Routes
            location={location}
            key={location.pathname}
          >
            {Object.values(routes).map(
              (route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.Component}
                />
              ),
            )}
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </AnimatePresence>
  )
}
