import { Box } from '@mui/material'
import TasksTable from '../../components/tasksTable/tasksTable'
import CreateTaskButton from '../../components/buttons/createTaskButton/createTaskButton'
import { styles } from './TaskPageStyles'
const TaskPage = () => {
  return (
    <Box>
      <TasksTable />
      <Box sx={styles.buttonContainer}>
        <CreateTaskButton />
      </Box>
    </Box>
  )
}

export default TaskPage
