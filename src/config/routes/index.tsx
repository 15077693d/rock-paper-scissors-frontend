import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import MainLayout from '../../containers/Layout/MainLayout/MainLayout'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            path='/'
            element={<>123123123123</>}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
