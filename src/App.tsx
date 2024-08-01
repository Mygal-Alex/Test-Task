import PageWrapper from './containers/pageWrapper/pageWrapper'
import { TaskProvider } from './context/task-context'
import RoutesComponent from './router/routes'

const App = () => {
  return (
    <TaskProvider>
      <PageWrapper>
        <RoutesComponent />
      </PageWrapper>
    </TaskProvider>
  )
}

export default App
