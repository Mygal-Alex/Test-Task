import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { styles } from './TaskCardStyles'
import TaskForm from '../../components/taskForm/taskForm'

const TaskCard: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>()
  const numericTaskIndex = Number(taskId) - 1

  return (
    <Box sx={styles.pageContainer}>
      <Box sx={styles.cardContainer}>
        <TaskForm index={numericTaskIndex} />
      </Box>
    </Box>
  )
}

export default TaskCard
