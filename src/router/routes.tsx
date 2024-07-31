import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Navigate
} from 'react-router-dom'
import TaskPage from '../pages/TaskPage'

const getRoutes = (): RouteObject[] => {
  return [
    {
      path: '/',
      element: <TaskPage />
    },
    {
      path: '*',
      element: <Navigate replace to='/' />
    }
  ]
}

const RoutesComponent = () => {
  const router = createBrowserRouter(getRoutes())
  return <RouterProvider router={router} />
}

export default RoutesComponent
