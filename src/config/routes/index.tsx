import {
  BrowserRouter,
  Route,
  Routes,
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
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {Object.values(routes).map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.Component}
            />
          ))}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
