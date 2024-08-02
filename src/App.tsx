import PageWrapper from './containers/pageWrapper/pageWrapper'
import { CardProvider } from './context/card-context'
import { TaskProvider } from './context/task-context'
import RoutesComponent from './router/routes'

const App = () => {
  return (
    <TaskProvider>
      <CardProvider>
        <PageWrapper>
          <RoutesComponent />
        </PageWrapper>
      </CardProvider>
    </TaskProvider>
  )
}

export default App
