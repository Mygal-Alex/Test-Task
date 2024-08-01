import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Navigate
} from 'react-router-dom'
import TaskPage from '../pages/TaskPage/TaskPage'
import TaskCard from '../pages/TaskCard/TaskCard'

const getRoutes = (): RouteObject[] => {
  return [
    {
      path: '/',
      element: <TaskPage />
    },
    {
      path: '/taskCard/:taskId',
      element: <TaskCard />
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
